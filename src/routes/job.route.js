import express from "express"

const jobRouter = express.Router()

jobRouter.get("/job", () => {console.log("Get All Jobs")})
jobRouter.get("/job/:job_id", () => {console.log("Get Job By Id")})
jobRouter.post("/job", () => {console.log("Creaet Job")})
jobRouter.patch("/job/:job_id", () => {console.log("Edit Job By Id")})
jobRouter.delete("/job/:job_id", () => {console.log("Delete Job By Id")})







export default jobRouter