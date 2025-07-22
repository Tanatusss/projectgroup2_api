import express from "express"

const profileRouter = express.Router()

profileRouter.get("/profile/:profile_id", () => console.log("Get Profile By Id"))
profileRouter.post("/profile", () => console.log("Create Profile"))
profileRouter.patch("/profile/:profile_id", () => console.log("Edit Profile By Id"))
profileRouter.delete("/profile/:profile_id", () => console.log("Delete Profile By Id"))








export default profileRouter