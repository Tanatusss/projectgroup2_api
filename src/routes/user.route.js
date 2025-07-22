import express from "express"
import { registerUserSchema, validate } from "../middlewares/validator.js"
import { registerUser } from "../controllers/user.controller.js"

const userRouter = express.Router()



userRouter.get("/user", () => {console.log("Get All User")})
userRouter.get("/user/:user_id", () => {console.log("Get User By Id")})
userRouter.patch("/user/:user_id", () => {console.log("Edit User By Id")})
userRouter.delete("/user/:user_id", () => {console.log("Delete User By Id")})





export default userRouter
