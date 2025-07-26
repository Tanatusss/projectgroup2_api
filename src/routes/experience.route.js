import express from "express"
import { authCheck } from "../middlewares/authCheck.js"
import { createWorkExperience } from "../controllers/experiece.controller.js"

const experienceRouter = express.Router()

experienceRouter.get("/profiles/:id/work-experiences", () => console.log("Get Experience By Id"))
experienceRouter.post("/profiles/:id/work-experiences", authCheck,createWorkExperience)
experienceRouter.patch("/work-experiences/:id", () => console.log("Edit Experience By Id"))
experienceRouter.delete("/work-experiences/:id", () => console.log("Delete Experience By Id"))








export default experienceRouter