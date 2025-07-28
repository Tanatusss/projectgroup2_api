import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export const getLanguages = async (req, res, next) => {
  const { id } = req.params
  try {
    const languages = await prisma.languages.findMany({
      where: { profile_id: parseInt(id) }
    })
    res.json(languages)
  } catch (err) {
    next(err)
  }
}

export const createLanguage = async (req, res, next) => {
  const { id } = req.params
  const { name } = req.body
  try {
    if (!name) {
      createError(400,"Language name is required")
    }

    const newLanguage = await prisma.languages.create({
      data: {
        name,
        profileUser: {
          connect: { id: parseInt(id) }
        }
      }
    })

    res.status(201).json(newLanguage)
  } catch (err) {
    next(err)
  }
}

export const updateLanguage = async (req, res, next) => {
  const { id, language_id } = req.params
  const { name } = req.body

  try {
    const existing = await prisma.languages.findUnique({
      where: { id: parseInt(language_id) }
    })

    if (!existing || existing.profile_id !== parseInt(id)) {
      createError(404,"Language not found for this profile")
    }

    const updatedLanguage = await prisma.languages.update({
      where: { id: parseInt(language_id) },
      data: { name }
    })

    res.json(updatedLanguage)
  } catch (err) {
    next(err)
  }
}

export const deleteLanguage = async (req, res, next) => {
  const { id, language_id } = req.params

  try {
    const existing = await prisma.languages.findUnique({
      where: { id: parseInt(language_id) }
    })

    if (!existing || existing.profile_id !== parseInt(id)) {
      createError(404, "Language not found for this profile")
    }

    await prisma.languages.delete({
      where: { id: parseInt(language_id) }
    })

    res.status(200).json({message: "Delete Done"})
  } catch (err) {
    next(err)
  }
}