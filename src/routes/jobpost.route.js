import express from "express"
import { authCheck } from "../middlewares/authCheck.js"
import { createJobPost, deleteJobPost, updateJobPost } from "../controllers/jobpost.controller.js"

const jobRouter = express.Router()

jobRouter.get("/job", () => {console.log("Get All Jobs")})
jobRouter.get("/job/:job_id", () => {console.log("Get Job By Id")})
jobRouter.post("/job",authCheck,createJobPost)
jobRouter.patch("/job/:job_id",authCheck,updateJobPost)
jobRouter.delete("/job/:job_id",authCheck,deleteJobPost)








export default jobRouter