import express from "express"

const applicationRouter = express.Router()



applicationRouter.get("/application", () => (console.log("Get All Applications")))
applicationRouter.get("/application/:application_id", () => (console.log("Get Application By Id")))
applicationRouter.post("/application", () => (console.log("Create Appication")))
applicationRouter.delete("/application/:application_id", () => (console.log("Cancel Application By Id")))









export default applicationRouter