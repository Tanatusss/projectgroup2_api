import express from "express"

const authRouter = express.Router()

authRouter.post("/auth/user-register", () => {console.log("User Register")})
authRouter.post("/auth/company-register", () => {console.log("Company Register")})
authRouter.post("/auth/user-login", () => {console.log("User Login")})
authRouter.post("/auth/company-login", () => {console.log("Company Login")})




export default authRouter
