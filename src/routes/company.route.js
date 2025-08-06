import express from "express"
import { authCheck } from "../middlewares/authCheck.js"
import { getCompanyByUserId, updatecompany } from "../controllers/company.controller.js"
import { upload } from "../config/cloudinary.js"

const companyRouter = express.Router()

companyRouter.get("/company", () => console.log("Get All Companies"))
companyRouter.get("/company/:company_id", () => console.log("not used"))
companyRouter.get("/company/user/:user_id", getCompanyByUserId)
companyRouter.post("/company", () => console.log("Create Company"))
companyRouter.patch("/company/:company_id", authCheck, upload.fields([{ name: "image_bg", maxcount: 1 }, { name: "logoimage", maxcount: 1 }]), updatecompany)
companyRouter.post("/company/:company_id", () => console.log("Delete Company By Id"))







export default companyRouter
