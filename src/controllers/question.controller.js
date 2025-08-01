import { createError } from '../utils/createError.js'
import prisma from '../config/prisma.js'

export const setExpectedAnswers = async (req, res, next) => {
  const { jobpost_id, questions } = req.body

  if (!jobpost_id || !Array.isArray(questions)) {
    createError(400, "jobpost_id and questions are required")
  }

  try {
    const deletes = await Promise.all(
      questions.map(q =>
        prisma.companyAnswer.deleteMany({
          where: {
            jobpostId: jobpost_id,
            questionId: q.question_id,
          },
        })
      )
    )

    const allInserts = questions.flatMap(q =>
      q.answeroption_ids.map(optionId => ({
        jobpostId: jobpost_id,
        questionId: q.question_id,
        answerOptionId: optionId,
      }))
    )

    const created = await prisma.companyAnswer.createMany({
      data: allInserts,
    })

    res.status(201).json({
      message: "Expected answers set for multiple questions",
      deleted: deletes.length,
      inserted: created.count,
    })
  } catch (error) {
    next(error)
  }
}


export const getExpectedAnswers = async (req, res, next) => {
  const jobpostId = parseInt(req.params.jobpostId)

  if (isNaN(jobpostId)) {
    createError(400, "Invalid jobpostId")
  }

  try {
    const expectedAnswers = await prisma.companyAnswer.findMany({
      where: { jobpostId },
      include: {
        question: true,
        answerOption: true,
      },
      orderBy: {
        questionId: 'asc',
      }
    })

    const grouped = {}
    for (const ea of expectedAnswers) {
      const qid = ea.questionId
      if (!grouped[qid]) {
        grouped[qid] = {
          question_id: qid,
          question_text: ea.question.question,
          answers: [],
        }
      }

      grouped[qid].answers.push({
        answeroption_id: ea.answerOption.id,
        answer_text: ea.answerOption.text,
      })
    }

    res.json(Object.values(grouped))
  } catch (error) {
    next(error)
  }
}

export const getQuestionsByJobpost = async (req, res, next) => {
  const jobpostId = parseInt(req.params.jobpostId)

  if (isNaN(jobpostId)) {
   createError (400, "Invalid jobpostId")
  }

  try {
    
    const jobpost = await prisma.jobPost.findUnique({
      where: { id: jobpostId },
      select: { typejob: true },
    })

    if (!jobpost) {
      createError(404, "Jobpost not found")
    }

    const questions = await prisma.questionData.findMany({
      where: { typejob: jobpost.typejob },
      include: {
        answerData: true,
      },
      orderBy: {
        id: 'asc'
      }
    })

    const result = questions.map(q => ({
      question_id: q.id,
      question_text: q.question,
      type: q.type,
      answer_options: q.answerOptions.map(opt => ({
        answeroption_id: opt.id,
        answer_text: opt.text,
      }))
    }))

    res.json(result)
  } catch (error) {
    next(error)
  }
}



export const submitAnswers = async (req, res, next) => {
  const jobApplyId = parseInt(req.params.jobApplyId)
  const { answers } = req.body

  if (!jobApplyId || !Array.isArray(answers)) {
    createError(400, 'jobApplyId & answers required')
  }

  try {
    const jobApply = await prisma.jobApply.findUnique({
      where: { id: jobApplyId },
      select: { profileUser: { select: { userId: true } } }
    })

    if (!jobApply) createError(404, 'JobApply not found')
    if (jobApply.profileUser.userId !== req.user.id)
      createError(403, 'Forbidden')

    await prisma.$transaction(async tx => {
      for (const a of answers) {
        await tx.userAnswer.deleteMany({
          where: { jobApplyId, questionId: a.question_id }
        })

        if (a.answeroption_ids.length === 0) continue 

        await tx.userAnswer.create({
          data: {
            jobApplyId,
            questionId: a.question_id,
            selectedOptions: {
              create: a.answeroption_ids.map(id => ({ answerOptionId: id }))
            }
          }
        })
      }
    })

    res.status(201).json({ message: 'Answers saved / updated' })
  } catch (err) {
    next(err)
  }
}


export const getAnswers = async (req, res, next) => {
  const jobApplyId = parseInt(req.params.jobApplyId)
  if (isNaN(jobApplyId)) createError(400, 'Invalid jobApplyId')

  try {
    const records = await prisma.userAnswer.findMany({
      where: { jobApplyId },
      include: {
        question: true,
        selectedOptions: {
          include: { answerOption: true }
        }
      },
      orderBy: { questionId: 'asc' }
    })

    const result = records.map(r => ({
      question_id: r.questionId,
      question_text: r.question.question,
      answers: r.selectedOptions.map(o => ({
        answeroption_id: o.answerOptionId,
        answer_text: o.answerOption.text
      }))
    }))

    res.json(result)
  } catch (err) {
    next(err)
  }
}
