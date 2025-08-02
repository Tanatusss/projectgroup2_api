import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export const createJobApply = async (req, res, next) => {
  const { profile_id, jobpostIds, answers } = req.body

  if (!profile_id || !Array.isArray(jobpostIds) || !Array.isArray(answers)) {
    createError(400, "profile_id, jobpostIds and answers are required")
  }

  try {
    const jobApply = await prisma.jobApply.create({
      data: {
        profile_id,
        jobpost: {
          connect: jobpostIds.map(id => ({ id }))
        },
        UserQuestion: {
          create: answers.map(a => ({
            questionId: a.questionId,
            selectedOptions: {
              create: a.selectedAnswerOptionIds.map(optionId => ({
                answerOptionId: optionId
              }))
            }
          }))
        }
      },
      include: {
        jobpost: true,
        UserQuestion: {
          include: {
            selectedOptions: true
          }
        }
      }
    })

    res.status(201).json({ message: "Job Apply created with answers", jobApply })
  } catch (error) {
    next(error)
  }
}


