import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export const createJobApply = async (req, res, next) => {
  const { profile_id, jobpost_id, answers } = req.body

  if (!profile_id || !jobpost_id || !Array.isArray(answers)) {
    createError(400, "profile_id, jobpostIds and answers are required")
  }

  try {
    const jobApply = await prisma.jobApply.create({
      data: {
        profile_id,
        jobpost_id,
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

export const getJobApplyById = async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    const application = await prisma.jobApply.findUnique({
      where: { id },
      include: {
        profile: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
          },
        },
        jobpost: {
          select: {
            id: true,
            title: true,
          },
        },
        UserQuestion: {
          include: {
            question: true,
            selectedOptions: {
              include: {
                answerOption: true,
              },
            },
          },
        },
      },
    });

    if (!application) {
      return next(createError(404, "Application not found"));
    }

    res.status(200).json(application);
  } catch (error) {
    next(error);
  }
};

export const getAllJobAppliesByProfileId = async (req, res, next) => {
  try {
    const userId = req.user.id; 

    
    const profile = await prisma.profileUser.findFirst({
      where: { user_id: userId },
      select: { id: true },
    });

    if (!profile) {
      return next(createError(404, "Profile not found"));
    }

    const applications = await prisma.jobApply.findMany({
      where: { profile_id: profile.id },
      include: {
        profile: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
          },
        },
        jobpost: {
          select: {
            id: true,
            title: true,
          },
        },
      },
    });

    res.status(200).json(applications);
  } catch (error) {
    next(error);
  }
};

export const getJobAppliesByJobPostId = async (req, res, next) => {
  try {
    const userId = req.user.id; 
    const jobpostId = parseInt(req.params.jobpostId);

    const jobpost = await prisma.jobPost.findUnique({
      where: { id: jobpostId },
      include: {
        company: { select: { id: true, user_id: true } },
      },
    });

    if (!jobpost) return next(createError(404, "JobPost not found"));
    if (jobpost.company.user_id !== userId) return next(createError(403, "Access denied"));

    const expectedAnswers = await prisma.companyAnswer.findMany({
      where: { jobpostId },
      select: { questionId: true, answerOptionId: true },
    });

    const applications = await prisma.jobApply.findMany({
      where: { jobpost_id: jobpostId },
      include: {
        profile: { select: { id: true, firstname: true, lastname: true, phone: true } },
        UserQuestion: {
          include: {
            question: true, 
            selectedOptions: {
              include: { answerOption: true } 
            }
          }
        }
      }
    });

    const expectedMap = new Map();
    expectedAnswers.forEach(e => {
      const arr = expectedMap.get(e.questionId) || [];
      arr.push(e.answerOptionId);
      expectedMap.set(e.questionId, arr);
    });

    const applicationsWithMatch = applications.map(apply => {
      let matched = 0;
      const questionDetails = apply.UserQuestion.map(userQ => {
        const expectedAnswersForQ = expectedMap.get(userQ.questionId) || [];
        const userAnswerTexts = userQ.selectedOptions.map(opt => opt.answerOption.text);
        const userAnswerIds = userQ.selectedOptions.map(opt => opt.answerOptionId);
        
        const isMatch = userAnswerIds.some(id => expectedAnswersForQ.includes(id));
        if (isMatch) matched++;

        return {
          questionId: userQ.question.id,
          questionText: userQ.question.question,
          userAnswers: userAnswerTexts,
          isMatch
        };
      });

      return {
        id: apply.id,
        profile: apply.profile,
        matchCount: matched,
        totalQuestions: expectedMap.size,
        questions: questionDetails
      };
    });

    res.status(200).json(applicationsWithMatch);
  } catch (error) {
    next(error);
  }
};


export const deleteJobApplyById = async (req, res, next) => {
  try {
    const jobApplyId = parseInt(req.params.id);

    const jobApply = await prisma.jobApply.findUnique({
      where: { id: jobApplyId },
      include: {
        UserQuestion: {
          include: {
            selectedOptions: true, // UserAnswer
          },
        },
      },
    });

    if (!jobApply) {
      createError(404, "Job Application not found.")
    }

    // 1. ลบ UserAnswer (selectedOptions)
    for (const userQuestion of jobApply.UserQuestion) {
      await prisma.userAnswer.deleteMany({
        where: { UserQuestion_Id: userQuestion.id },
      });
    }

    // 2. ลบ UserQuestion
    await prisma.userQuestion.deleteMany({
      where: { jobApplyId: jobApplyId },
    });

    // 3. ลบ JobApply
    await prisma.jobApply.delete({
      where: { id: jobApplyId },
    });

    return res.status(200).json({ message: "Job Application cancelled successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};


