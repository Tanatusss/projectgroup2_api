import express from "express"
import { authCheck } from "../middlewares/authCheck.js"
import { updatecompany } from "../controllers/company.controller.js"

const companyRouter = express.Router()

companyRouter.get("/company", () => console.log("Get All Companies"))
companyRouter.get("/company/:company_id", () => console.log("Get Company By Id"))
companyRouter.post("/company", () => console.log("Create Company"))
companyRouter.patch("/company/:company_id",authCheck,updatecompany)
companyRouter.post("/company/:company_id", () => console.log("Delete Company By Id"))







export default companyRouter
