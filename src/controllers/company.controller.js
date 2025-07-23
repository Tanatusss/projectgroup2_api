import prisma from "../config/prisma";
import { updateCompany } from "../services/company.service";






export const updatecompany = async(req,res,next)=>{
  try{
    const companyId = req.company.id;
    const {name,phone,address,logoimage,link} = req.body;

    const updateCompany = await updateCompany(updatedUse,{name,phone,address,logoimage,link})
    res.json({
      msg: "Update company success",
      company: updateCompany,
    })

  }catch(error){
    next(error)
  }
}