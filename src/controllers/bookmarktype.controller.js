import prisma from "../config/prisma.js"
import { createError } from "../utils/createError.js"

export const bookmarkTypejob = async (req, res, next) => {
  const { user_id, typejob } = req.body

  if (!user_id || !typejob) {
    createError(400, "userId and typejob are required")
  }

  try {
    const existing = await prisma.bookmarkType.findUnique({
      where: {
        user_id_typejob: { user_id, typejob }
      }
    })

    if (existing) {
      createError(400, "Already bookmarked this typejob")
    }

    const bookmark = await prisma.bookmarkType.create({
      data: { user_id, typejob }
    })

    res.status(201).json(bookmark)
  } catch (err) {
    next(err)
  }
}

export const getJobsByTypejob = async (req, res, next) => {
  const { user_id, typejob } = req.params

  try {
    const exists = await prisma.bookmarkType.findUnique({
      where: {
        user_id_typejob: { user_id: parseInt(user_id), typejob }
      }
    })

    if (!exists) {
      createError(404, "This typejob was not bookmarked by the user")
    }

    const jobs = await prisma.jobPost.findMany({
      where: { typejob }
    })

    res.json(jobs)
  } catch (err) {
    next(err)
  }
}

export const getBookmarkedTypejobs = async (req, res, next) => {
  const user_id = parseInt(req.params.user_id)

  try {
    const bookmarks = await prisma.bookmarkType.findMany({
      where: { user_id },
    })

    const typejobs = bookmarks.map(b => b.typejob)

    const jobs = await prisma.jobPost.findMany({
      where: {
        typejob: { in: typejobs }
      },
      // orderBy: { createdAt: 'desc' }
    })

    res.json(jobs)
  } catch (err) {
    next(err)
  }
}

export const unbookmarkTypejob = async (req, res, next) => {
  const { user_id, typejob } = req.params

  try {
    await prisma.bookmarkType.delete({
      where: {
        user_id_typejob: {
          user_id: parseInt(user_id),
          typejob
        }
      }
    })

    res.json({ message: "Unbookmarked successfully" })
  } catch (err) {
    next(err)
  }
}