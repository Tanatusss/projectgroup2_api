import prisma from "../config/prisma.js"
import supabase from "../config/supabaseClient.js"
import { v4 as uuidv4 } from 'uuid'
import { createError } from "../utils/createError.js"

// GET resumes
export const getResumes = async (req, res, next) => {
	const profileId = parseInt(req.params.id)
	try {
		const resumes = await prisma.resume.findMany({
			where: { profile_id: profileId },
		})
		res.json(resumes)
	} catch (err) {
		next(err)
	}
}

export const uploadResume = async (req, res, next) => {
	const profileId = parseInt(req.params.id)
	const file = req.file
	const { name } = req.body

	const profile = await prisma.profileUser.findUnique({
		where: { id: profileId }
	})

	if (profile.user_id !== req.user.id) {
		createError(403, "You are not allowed to upload to this profile")
	}

	if (!file) return res.status(400).json({ error: 'No file uploaded' })
	if (!name) return res.status(400).json({ error: 'Name is required' })

	try {
		const fileName = `resume-${uuidv4()}.pdf`

		const { error: uploadError } = await supabase.storage
			.from(process.env.SUPABASE_BUCKET)
			.upload(fileName, file.buffer, {
				contentType: file.mimetype,
				upsert: false,
			})

		if (uploadError) throw uploadError

		const { data: publicUrlData } = supabase.storage
			.from(process.env.SUPABASE_BUCKET)
			.getPublicUrl(fileName)

		const newResume = await prisma.resume.create({
			data: {
				name: name,
				url: publicUrlData.publicUrl,
				profile_id: profileId,
			},
		})

		res.status(201).json(newResume)
	} catch (err) {
		next(err)
	}
}

export const updateResume = async (req, res, next) => {
	const id = parseInt(req.params.id)
	const { name } = req.body

	if (!name) {
		createError(400, "Name is required")
	}

	try {
		const resume = await prisma.resume.update({
			where: { id },
			data: { name },
		})

		res.status(200).json(resume)
	} catch (error) {
		next(error)
	}
}

export const deleteResume = async (req, res, next) => {
	const id = parseInt(req.params.id)
	try {
		const resume = await prisma.resume.findUnique({ where: { id } })
		if (!resume) {
			createError(404, "Resume not found")
		}

		const filePath = resume.url.split('/').pop()

		await supabase.storage
			.from(process.env.SUPABASE_BUCKET)
			.remove([filePath])

		await prisma.resume.delete({ where: { id } })
		res.json({ message: 'Resume deleted' })
	} catch (err) {
		next(err)
	}
}

