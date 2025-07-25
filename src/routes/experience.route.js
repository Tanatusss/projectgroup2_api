import express from "express"

const experienceRouter = express.Router()

experienceRouter.get("/profiles/:id/work-experiences", () => console.log("Get Experience By Id"))
experienceRouter.post("/profiles/:id/work-experiences", () => console.log("Create Experience"))
experienceRouter.patch("/work-experiences/:id", () => console.log("Edit Experience By Id"))
experienceRouter.delete("/work-experiences/:id", () => console.log("Delete Experience By Id"))








export default experienceRouter