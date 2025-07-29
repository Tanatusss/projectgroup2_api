import express from "express"


const publicRouter = express.Router();

publicRouter.get("/company",() => {console.log("Get All Jobs")})
publicRouter.get("/company/:id",() => {console.log("Get All Jobs")})
publicRouter.get("/jobs",() => {console.log("Get All Jobs")})
publicRouter.get("/jobs/:id",() => {console.log("Get All Jobs")})



export default publicRouter;