import express from "express"
import { registerUserSchema, validate } from "../middlewares/validator.js"
import { registerUser } from "../controllers/user.controller.js"


const userRouter = express.Router()

userRouter.get("/getme", () => console.log("user get me"))
userRouter.post("/register",validate(registerUserSchema),registerUser)

export default userRouter
