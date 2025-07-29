import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";


export const deleteCompanyById = async (req, res, next) => {
  try{
    const {id} = req.params;
    console.log(req.params,"company_id")
    if (isNaN(id)) {
      return res.status(400).json({ msg: "company_id ต้องเป็นตัวเลข" });
    }

    // const companyExists = await prisma.company.findUnique({
    //   where: {
    //     id: +id
    //   }
    // });
    if (!companyExists) {
      return createError(404, "Company not found");
    }
   const company =  await prisma.company.delete({
      where: {
          id: +id
        }
    });
    res.json({
      msg: "Delete company by id success",
      company
    
    })
  }catch(error){
    next(error)
  }
}
