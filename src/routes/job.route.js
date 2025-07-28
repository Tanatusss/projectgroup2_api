import express from "express"
import { authCheck } from "../middlewares/authCheck.js"
import { createJobPost, deleteJobPost, getAllPostJob, getJobById, updateJobPost } from "../controllers/job.controller.js"

const jobRouter = express.Router()

jobRouter.get("/job",authCheck,getAllPostJob)
jobRouter.get("/job/:job_id",authCheck,getJobById)
jobRouter.post("/job",authCheck,createJobPost)
jobRouter.patch("/job/:job_id",authCheck,updateJobPost)
jobRouter.delete("/job/:job_id",authCheck,deleteJobPost)







export default jobRouter