import express from "express"

const resumeRouter = express.Router()

resumeRouter.get("/profiles/:id/resumes", () => console.log("Get Resume By Id"))
resumeRouter.post("/profiles/:id/resumes", () => console.log("Create Resume"))
resumeRouter.patch("/resumes/:id", () => console.log("Edit Resume By Id"))
resumeRouter.delete("/resumes/:id", () => console.log("Delete Resume By Id"))








export default resumeRouter