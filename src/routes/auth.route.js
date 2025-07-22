import express from "express"
import { registerUserSchema, validate } from "../middlewares/validator.js"
import { loginUser, registerUser } from "../controllers/auth.controller.js"
import { authCheck } from "../middlewares/authCheck.js"

const authRouter = express.Router()

authRouter.post("/auth/user-register",validate(registerUserSchema),registerUser)
authRouter.post("/auth/company-register", () => {console.log("Company Register")})
authRouter.post("/auth/user-login",loginUser)
authRouter.post("/auth/company-login", () => {console.log("Company Login")})




export default authRouter
