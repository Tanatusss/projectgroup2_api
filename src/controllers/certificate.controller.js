import { v4 as uuidv4 } from "uuid"
import supabase from "../config/supabaseClient.js"
import { createError } from "../utils/createError.js"
import prisma from "../config/prisma.js"



export const uploadCertificate = async (req, res, next) => {
  const profileId = parseInt(req.params.id)
  const file = req.file
  const { name } = req.body

  const profile = await prisma.profileUser.findUnique({
      where: { id: profileId },
    })

  if (profile.user_id !== req.user.id) {
    createError(403, "You are not allowed to upload to this profile")
  }

  if (!file) return res.status(400).json({ error: 'No file uploaded' })
  if (!name) return res.status(400).json({ error: 'Name is required' })

  try {
    const fileName = `certificate-${uuidv4()}.pdf`

    const { error: uploadError } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET_CERTIFICATES) 
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
        upsert: false,
      })

    if (uploadError) throw uploadError

    const { data: publicUrlData } = supabase.storage
      .from(process.env.SUPABASE_BUCKET_CERTIFICATES)
      .getPublicUrl(fileName)

    const newCertificate = await prisma.certificate.create({
      data: {
        name: name,
        url: publicUrlData.publicUrl,
        profile_id: profileId,
      },
    })

    res.status(201).json(newCertificate)
  } catch (err) {
    next(err)
  }
}

export const getCertificatesByProfile = async (req, res, next) => {
  try {
    const profileId = parseInt(req.params.id)
    const certificates = await prisma.certificate.findMany({
      where: { profile_id: profileId },
    })
    res.json(certificates)
  } catch (err) {
    next(err)
  }
}

export const updateCertificate = async (req, res, next) => {
  try {
    const certId = parseInt(req.params.id)
    const { name } = req.body

    const updated = await prisma.certificate.update({
      where: { id: certId },
      data: { name },
    })

    res.json(updated)
  } catch (err) {
    next(err)
  }
}

export const deleteCertificate = async (req, res, next) => {
  try {
    const certId = parseInt(req.params.id)

    const found = await prisma.certificate.findUnique({
      where: { id: certId },
    })

    if (!found) return next(createError(404, "Certificate not found"))

    const filePath = found.url.split("/").pop()
    await supabase.storage.from(process.env.SUPABASE_BUCKET_CERTIFICATES).remove([filePath])

    await prisma.certificate.delete({
      where: { id: certId },
    })

    res.json({ message: 'Certificate deleted' })
  } catch (err) {
    next(err)
  }
}
