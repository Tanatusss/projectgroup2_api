import express from "express"
import { registerUserSchema, validate } from "../middlewares/validator.js"
import { registerUser } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/auth/user-register",validate(registerUserSchema),registerUser)
authRouter.post("/auth/company-register", () => {console.log("Company Register")})
authRouter.post("/auth/user-login", () => {console.log("User Login")})
authRouter.post("/auth/company-login", () => {console.log("Company Login")})




export default authRouter
