import express from "express"
import * as profileController from "../controllers/profile.controller.js"
import { authCheck } from "../middlewares/authCheck.js"

const profileRouter = express.Router()

profileRouter.get("/profiles/:id",authCheck ,profileController.getProfileById)
profileRouter.patch("/profiles/:id", authCheck, profileController.updateProfileById)
profileRouter.patch("/profile/:id", authCheck, profileController.updateProfileByIdWithWorkEx)









export default profileRouter