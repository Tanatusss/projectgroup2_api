import prisma from "../config/prisma.js";
import { createJob, updateJob } from "../services/job.service.js";
import { createError } from "../utils/createError.js";

export const createJobPost = async (req, res, next) => {
  try {
    const  {id}  = req.company;
    console.log("kuay",id)
    const {
      title,
      jobDescription,
      address,
      salary,
      jobRequirement,
      typejob
      
    } = req.body
    if (!id) {
      createError(400, "Missing required fields")
    }

    const jobPost = await createJob({
        title,
        jobDescription,
        address,
        salary,
        jobRequirement,
        typejob,
        company_id: +id 
    })

    res.json({
      msg: "Post job success",
      jobpost: jobPost
    })


  } catch (error) {
    next(error);
  }
}

export const updateJobPost =async (req,res,next)=> {
  try{
     const {id} = req.params;
      const {
      title,
      jobDescription,
      address,
      salary,
      jobRequirement,
    } = req.body
    console.log("req.body = ", req.body);
    console.log("job_id",job_id)
    if (!req.body) {
      return res.status(400).json({ msg: "Missing request body" });
    }
    if (!job_id) {
      createError(400, "Missing required fields")
    }

    const jobPost = await updateJob(job_id,{
        title,
        jobDescription,
        address,
        salary,
        jobRequirement,
    })

    res.json({
      msg: "Update job success",
      jobpost: jobPost
    })

  }catch(error){
    next(error);
  }
}


export const deleteJobPost = async(req,res,next)=>{
  try{
    const {job_id} = req.params;
    const {id} = req.company;
    const job = await prisma.jobPost.findFirst({
      where: {id: Number(job_id), id}
    })
    if(!job) {
      return res.json({message: 'Not found !!!'})
    }
    const deletejob = await prisma.jobPost.delete({
      where:{
          id:Number(job_id)
      }
    })
    res.json({
      msg: "Deleete success",
      deletejob
    })
  }catch(error){
    next(error)
  }
}

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