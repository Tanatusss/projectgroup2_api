import express from "express"
import { registerSchema, loginSchema, validate } from "../middlewares/validator.js"
import { forgotPassword, login, refreshAccessToken, registerUser, resetPassword } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/auth/register", validate(registerSchema), registerUser)
authRouter.post("/auth/login", validate(loginSchema), login)

authRouter.post("/auth/forgot-password", forgotPassword)
authRouter.post("/auth/reset-password", resetPassword)

authRouter.post("/auth/google/signin", () => { console.log("google-signin") })

authRouter.get("/auth/refresh-token", refreshAccessToken)




export default authRouter
