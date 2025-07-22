import prisma from "../config/prisma.js";


export const createUser = async (userData) => {
  return await prisma.user.create({data: userData})
}


export const findUser = async (email) => {
  return await prisma.user.findFirst({
    where: {
      email
    }
  })
}