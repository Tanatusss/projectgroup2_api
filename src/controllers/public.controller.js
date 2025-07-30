import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export const getAllPostJob = async(req,res,next)=>{
  try{
    const jobs = await prisma.jobPost.findMany({
      include: {
        company: {
          select: {
            companyname: true,
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


export const getPostJobById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return createError(400, "Missing required fields");
    }
    const job = await prisma.jobPost.findUnique({
      where: {
        id: +id,
      },
      include: {
        company: {
          select: {
            companyname: true,
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
    const { id } = req.params;
    if (!id) {
      return createError(400, "Missing required fields");
    }
    const company = await prisma.company.findUnique({
      where: {
        id: +id,
      } 
    });
    if (!company) {
      return createError(404, "Company not found");
    }
    res.json({
      msg: "Get company by id success",
      company,
    });
  } catch (error) {
    next(error);
  }
}


export const getAllJobpostsByTypeJob = async(req,res,next)=>{
  try{
    const {typejob} = req.params;
    if (!typejob) {
      return createError(400, "Missing required fields");
    }
    const jobs = await prisma.jobPost.findMany({
      where: {
        typejob: typejob,
        // status: "ACTIVE"
      },
      orderBy:{
        createAt: "desc"
      }
    })
    res.json({
      msg: "Get all job posts by type job success",
      jobs
    })
  }catch(error){
    next(error);
  }
}