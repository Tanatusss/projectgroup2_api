import express from "express"

const certificateRouter = express.Router()

certificateRouter.get("/profiles/:id/certificates", () => console.log("Get Certificate By Id"))
certificateRouter.post("/profiles/:id/certificates", () => console.log("Create Certificate"))
certificateRouter.patch("/certificates/:id", () => console.log("Edit Certificate By Id"))
certificateRouter.delete("/certificates/:id", () => console.log("Delete Certificate By Id"))








export default certificateRouter