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
