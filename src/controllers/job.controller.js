import prisma from "../config/prisma.js";

export const createJobPost = async (req, res, next) => {
  try {
    const { id } = req.company;
    const {
      title,
      jobdescription,
      address,
      salary,
      jobrequirements,
      expiredate
    } = req.body
    if (!id) {
      createError(400, "Missing required fields")
    }
    const existingJobPost = await prisma.jobPost.findFirst({
      where: {
        companyId: id
      }
    })
    const jobPost = await prisma.jobPost.create({
      data: {
        title,
        jobdescription,
        address,
        salary,
        jobrequirements,
        expiredate
      }
    })

    res.json({
      msg: "Post job success",
      jobpost: jobPost
    })


  } catch (error) {
    next(error);
  }
}