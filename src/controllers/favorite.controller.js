import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export const addFavoriteJob = async (req, res, next) => {
  try {
    const userId = req.user.id
    const { job_id } = req.body

    if (!job_id) {
      createError(400, "job_id is required")
    }

    // Check duplicate
    const exists = await prisma.favoriteJob.findFirst({
      where: {
        user_id: userId,
        job_id: job_id
      }
    })

    if (exists) {
      createError(400, "Already favorited")
    }

    const favorite = await prisma.favoriteJob.create({
      data: {
        user_id: userId,
        job_id
      }
    })

    res.status(201).json(favorite)
  } catch (error) {
    next(error)
  }
}

export const getFavoriteJobs = async (req, res, next) => {
  try {
    const userId = req.user.id

    const favorites = await prisma.favoriteJob.findMany({
      where: { user_id: userId },
      include: {
        job: {
          include: {
            company: true,
            district: true
          }
        }
      }
    })

    res.status(200).json(favorites)
  } catch (error) {
    next(error)
  }
}

export const removeFavoriteJob = async (req, res, next) => {
  try {
    const userId = req.user.id
    const favoriteId = parseInt(req.params.id)

    const favorite = await prisma.favoriteJob.findUnique({
      where: { id: favoriteId }
    })

    if (!favorite) {
      return next(createError(404, "Favorite not found"))
    }

    if (favorite.user_id !== userId) {
      return next(createError(403, "Unauthorized"))
    }

    await prisma.favoriteJob.delete({
      where: { id: favoriteId }
    })

    res.status(200).json({ message: "Favorite removed" })
  } catch (error) {
    next(error)
  }
}