import express from "express"

const companyRouter = express.Router()

companyRouter.get("/company", () => console.log("Get All Companies"))
companyRouter.get("/company/:company_id", () => console.log("Get Company By Id"))
companyRouter.post("/company", () => console.log("Create Company"))
companyRouter.patch("/company/:company_id", () => console.log("Edit company by id"))
companyRouter.post("/company/:company_id", () => console.log("Delete Company By Id"))







export default companyRouter
