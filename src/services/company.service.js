import prisma from "../config/prisma"

export const updateCompany = async(companyId,updateData)=>{
  return await prisma.company.update({
    where: {id: companyId},
    data: updateData,
  })
}