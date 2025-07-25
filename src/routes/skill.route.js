import express from "express"

const skillRouter = express.Router()

skillRouter.get("/skills", () => console.log("Get all skills"))
skillRouter.get("/profiles/:id/skills", () => console.log("Get skill by profile id"))
skillRouter.patch("/profiles/:id/skills", () => console.log("Edit skill by profile id"))








export default skillRouter