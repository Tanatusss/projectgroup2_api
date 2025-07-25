import express from "express"
import { loginCompanySchema, loginUserSchema, registerCompanySchema, registerUserSchema, validate } from "../middlewares/validator.js"
import { forgotPassword, loginCompany, loginUser, registerCompany, registerUser, resetPassword } from "../controllers/auth.controller.js"
import { authCheck } from "../middlewares/authCheck.js"

const authRouter = express.Router()

authRouter.post("/auth/user-register", validate(registerUserSchema), registerUser)
authRouter.post("/auth/company-register", validate(registerCompanySchema), registerCompany)
authRouter.post("/auth/user-login", validate(loginUserSchema), loginUser)
authRouter.post("/auth/company-login", validate(loginCompanySchema), loginCompany)

authRouter.post("/auth/forgot-password", forgotPassword)
authRouter.post("/auth/reset-password", resetPassword)

authRouter.get("auth/refresh-token", () => { console.log("refresh") })




export default authRouter
