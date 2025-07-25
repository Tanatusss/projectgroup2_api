import express from "express"

const profileRouter = express.Router()

profileRouter.get("/profiles/:id", () => {console.log("Get profile by id")})
profileRouter.patch("/profiles/:id", () => {console.log("Edit profiles by id")})








export default profileRouter