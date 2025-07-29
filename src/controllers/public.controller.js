import prisma from "../config/prisma";
import { createError } from "../utils/createError";

export const getAllPostJob = async(req,res,next)=>{
  try{
    const jobs = await prisma.jobPost.findMany({
      include: {
        company: {
          select: {
            name: true,
            logoimage: true,
          },
        },
      },
    });
    res.json({
      msg: "Get all job success",
      jobs
    })
  }catch(error){
    next(error);
  }
}


export const getJobById = async (req, res, next) => {
  try {
    const { job_id } = req.params;
    if (!job_id) {
      return createError(400, "Missing required fields");
    }
    const job = await prisma.jobPost.findUnique({
      where: {
        id: +job_id,
      },
      include: {
        company: {
          select: {
            name: true,
            logoimage: true,
          },
        },
      },
    });
    if (!job) {
      return createError(404, "Job not found");
    }
    res.json({
      msg: "Get job by id success",
      job,
    });
  } catch (error) {
    next(error);
  }
}


export const getAllCompany = async(req,res,next)=>{
  try{
    const company = await prisma.company.findMany()
    res.json({
      msg: "Get all company success",
      company
    })
  }catch(error){
    next(error);
  }
}


export const getCompanyById = async (req, res, next) => {
  try {
    const { job_id } = req.params;
    if (!job_id) {
      return createError(400, "Missing required fields");
    }
    const job = await prisma.jobPost.findUnique({
      where: {
        id: +job_id,
      },
      include: {
        company: {
          select: {
            name: true,
            logoimage: true,
          },
        },
      },
    });
    if (!job) {
      return createError(404, "Job not found");
    }
    res.json({
      msg: "Get job by id success",
      job,
    });
  } catch (error) {
    next(error);
  }
}