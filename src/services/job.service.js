import prisma from "../config/prisma.js";


export const createJob =  async(dataJob)=>{
  return await prisma.jobPost.create({
    data: dataJob
  })
}

export const updateJob = async(job_id, updateData)=>{
  return await prisma.jobPost.update({
    where: {id: +job_id},
    data: updateData,
  })
}


