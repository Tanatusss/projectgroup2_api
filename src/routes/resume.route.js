import express from "express"
import * as resumeController from "../controllers/resume.controller.js"
import { authCheck } from "../middlewares/authCheck.js"
import uploadPDFToMemory from "../middlewares/uploadPDFToMemory.js"

const resumeRouter = express.Router()

resumeRouter.get("/profiles/:id/resumes", authCheck, resumeController.getResumes)
resumeRouter.post("/profiles/:id/resumes", authCheck, uploadPDFToMemory, resumeController.uploadResume)
resumeRouter.patch("/resumes/:id", authCheck, resumeController.updateResume)
resumeRouter.delete("/resumes/:id", authCheck, resumeController.deleteResume)








export default resumeRouter