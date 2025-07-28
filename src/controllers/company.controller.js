import prisma from "../config/prisma.js";
import { updateCompany } from "../services/company.service.js";
import { createError } from "../utils/createError.js";


export const updatecompany = async (req, res, next) => {
  try {
    const { company_id } = req.params;
    const { name, phone, address, logoimage, link } = req.body;
    const newCompany = await updateCompany(company_id, { name, phone, address, logoimage, link })
    if (isNaN(company_id)) {
      return res.status(400).json({ msg: "company_id ต้องเป็นตัวเลข" });
    }
    res.json({
      msg: "Update company success",
      company: newCompany,
    })

  } catch (error) {
    next(error)
  }
}


export const getAllCompany = async (req,res,next)=>{
  try{
    const company = await prisma.company.findMany();
    res.json({
      msg: "Get all company success",
      company
    })
  }catch(error){
    next(error)
  }
}


export const getCompanyById = async (req, res, next) => {
  try{
    const {company_id} = req.params;
    if (isNaN(company_id)) {
      return res.status(400).json({ msg: "company_id ต้องเป็นตัวเลข" });
    }
    const company = await prisma.company.findUnique({
      where: {
        id: +company_id
      }
    });
    if (!company) {
      return createError(404, "Company not found");
    }
    res.json({
      msg: "Get company by id success",
      company
    })
  }catch(error){
    next(error)
  }
}