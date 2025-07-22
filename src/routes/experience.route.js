import express from "express"

const experienceRouter = express.Router()

experienceRouter.get("/experience/experience_id", () => console.log("Get Experience By Id"))
experienceRouter.post("/experience", () => console.log("Create Experience"))
experienceRouter.patch("/experience/experience_id", () => console.log("Edit Experience By Id"))
experienceRouter.delete("/experience/experience_id", () => console.log("Delete Experience By Id"))








export default experienceRouter