import prisma from "../config/prisma.js";
import { updateCompany } from "../services/company.service.js";
import { createError } from "../utils/createError.js";


export const updatecompany = async (req, res, next) => {
  try {
    const { company_id } = req.params;
    const { hrfirstname,hrlastname,companyname, phone, address, image_bg,logoimage, link,taxnumber,billaddress } = req.body;
    const newCompany = await updateCompany(company_id, { hrfirstname,hrlastname,companyname, phone, address, image_bg,logoimage, link,taxnumber,billaddress })
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

