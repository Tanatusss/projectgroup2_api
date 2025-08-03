import express from "express"
import * as applyJobController from "../controllers/applyjob.controller.js"
import { authCheck } from "../middlewares/authCheck.js"

const applyJobRouter = express.Router()



applyJobRouter.get("/jobapplies", authCheck, applyJobController.getAllJobAppliesByProfileId)
applyJobRouter.get("/jobapplies/jobpost/:jobpostId", authCheck, applyJobController.getJobAppliesByJobPostId)
applyJobRouter.get("/jobapplies/:id", authCheck, applyJobController.getJobApplyById)
applyJobRouter.post("/jobapplies", authCheck, applyJobController.createJobApply)
applyJobRouter.delete("/jobapplies/:id", authCheck, applyJobController.deleteJobApplyById)









export default applyJobRouter