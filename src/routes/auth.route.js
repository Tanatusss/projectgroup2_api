import express from "express"
import { loginCompanySchema, loginUserSchema, registerCompanySchema, registerUserSchema, validate } from "../middlewares/validator.js"
import { forgotPassword, loginCompany, loginUser, refreshAccessToken, registerCompany, registerUser, resetPassword } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/auth/user-register", validate(registerUserSchema), registerUser)
authRouter.post("/auth/company-register", validate(registerCompanySchema), registerCompany)
authRouter.post("/auth/user-login", validate(loginUserSchema), loginUser)
authRouter.post("/auth/company-login", validate(loginCompanySchema), loginCompany)

authRouter.post("/auth/forgot-password", forgotPassword)
authRouter.post("/auth/reset-password", resetPassword)

authRouter.post("/auth/google/user-signin", () => { console.log("user-google-signin") })
authRouter.post("/auth/google/company-signin", () => { console.log("company-google-signin") })

authRouter.get("auth/refresh-token", refreshAccessToken)




export default authRouter
