import prisma from "../config/prisma.js";


export const createExperiences = async (data) => {
  return await prisma.workExperience.create({
    data: data
  });
}