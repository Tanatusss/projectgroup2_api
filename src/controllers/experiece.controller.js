import { ca } from "zod/v4/locales";
import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import { createExperiences } from "../services/experince.service.js";


export const createWorkExperience = async (req, res, next) => {
  try{
    const {id} = req.params;
    console.log(req.params,"profile");
    const {
      jobPosition,
      companyname,
      salary,
      startDate,
      endDate
    }= req.body;
    if(!id){
      return createError(400, "Missing required fields");
    }
    // console.log(req.profile,"profile");
    const createExperience = await createExperiences({
      jobPosition,
      companyname,
      salary,
      startDate,
      endDate,
      profile_id: +id
    })
    res.json({
      msg: "Create work experience success",
      experience: createExperience
    })
  }catch (error) {
    next(error);
  }
}



export const getworkExperienceById = async (req, res, next) => {
  try{
    const {id} = req.params;
    console.log(req.params,"id")
    if(!id){
      return createError(400, "Missing required fields");
    }
    const experience = await prisma.workExperience.findMany({
      where: {
        profile_id: +id
      }
    });
    res.json({
      msg: "Get work experience by id success",
      experience
    });
  }catch(error){
    next(error);
  }
}

export const editWorkExperienceById = async (req, res, next) => {
  try{
    const {id} = req.params;
    console.log(req.params,"id")
    if(!id){
      return createError(400, "Missing required fields");
    } 
    const {
      jobPosition,
      companyname,
      salary,
      startDate,
      endDate
    }= req.body;
    const updateExperience = await prisma.workExperience.update({
      where: {
        id: +id
      },
      data: {
        jobPosition,
        companyname,
        salary,
        startDate,
        endDate
      }
    })
    res.json({
      msg: "Update work experience success",
      experience: updateExperience
    });
  }catch(error){
    next(error);
  }
}

export const deleteWorkExperienceById = async (req, res, next) => {
  try{
     const {id} = req.params;
     console.log(req.params,"id")
    if(!id){
      return createError(400, "Missing required fields");
    }
    const deleteExperience = await prisma.workExperience.delete({
      where: {
        id: +id
      }
    });
    res.json({
      msg: "Delete work experience success",
      experience: deleteExperience
    });
   
  }catch(error){
    next(error);
  }
}