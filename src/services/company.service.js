import prisma from "../config/prisma.js"

export const updateCompany = async(company_id,updateData)=>{
  return await prisma.company.update({
    where: {id: +company_id},
    data: updateData,
  })
}