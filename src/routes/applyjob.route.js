import express from "express"
import * as applyJobController from "../controllers/applyjob.controller.js"
import { authCheck } from "../middlewares/authCheck.js"

const applyJobRouter = express.Router()



applyJobRouter.get("/jobapplies", () => (console.log("Get All Applications")))
applyJobRouter.get("/jobapplies/:id", () => (console.log("Get Application By Id")))
applyJobRouter.post("/jobapplies", authCheck, applyJobController.createJobApply)
applyJobRouter.delete("/jobapplies/:id", () => (console.log("Cancel Application By Id")))









export default applyJobRouter