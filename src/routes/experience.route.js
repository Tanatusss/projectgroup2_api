import express from "express"
import { authCheck } from "../middlewares/authCheck.js"
import { createWorkExperience, deleteWorkExperienceById, editWorkExperienceById, getworkExperienceById } from "../controllers/experiece.controller.js"

const experienceRouter = express.Router()

experienceRouter.get("/profiles/:id/work-experiences",authCheck,getworkExperienceById)
experienceRouter.post("/profiles/:id/work-experiences", authCheck,createWorkExperience)
experienceRouter.patch("/work-experiences/:id",authCheck,editWorkExperienceById)
experienceRouter.delete("/work-experiences/:id",authCheck,deleteWorkExperienceById)







export default experienceRouter