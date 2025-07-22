import express from "express"
import { registerUserSchema, validate } from "../middlewares/validator.js"
import { forgotPassword, loginUser, registerUser, resetPassword } from "../controllers/auth.controller.js"
import { authCheck } from "../middlewares/authCheck.js"

const authRouter = express.Router()

authRouter.post("/auth/user-register",validate(registerUserSchema),registerUser)
authRouter.post("/auth/company-register", () => {console.log("Company Register")})
authRouter.post("/auth/user-login",loginUser)
authRouter.post("/auth/company-login", () => {console.log("Company Login")})

authRouter.post("/auth/forgot-password", forgotPassword)
authRouter.post("/auth/reset-password", resetPassword)






export default authRouter
