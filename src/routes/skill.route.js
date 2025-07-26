import express from "express"
import { authCheck } from "../middlewares/authCheck.js"
import * as skillController from "../controllers/skill.controller.js"

const skillRouter = express.Router()

skillRouter.get("/profiles/:id/skills", authCheck, skillController.getSkillsByProfileId)
skillRouter.patch("/profiles/:id/skills", authCheck, skillController.updateSkillsByProfileId)








export default skillRouter