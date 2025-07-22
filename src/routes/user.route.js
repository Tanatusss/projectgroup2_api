import express from "express"
import * as userController from "../controllers/users.controller.js"

const userRouter = express.Router()



userRouter.get("/user", userController.getAllUsers)
userRouter.get("/user/:id", userController.getUserById)
userRouter.patch("/user/:user_id", () => {console.log("Edit User By Id")})
userRouter.delete("/user/:id", userController.deleteUser)





export default userRouter
