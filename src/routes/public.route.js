import express from "express"
import { getAllCompany, getAllPostJob, getCompanyById, getPostJobById } from "../controllers/public.controller.js";


const publicRouter = express.Router();

publicRouter.get("/company",getAllCompany)
publicRouter.get("/company/:id",getCompanyById)
publicRouter.get("/jobs",getAllPostJob)
publicRouter.get("/jobs/:id",getPostJobById)



export default publicRouter;