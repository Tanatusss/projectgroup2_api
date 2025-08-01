import express from "express"
import { getAllCompany, getAllJobpostsByTypeJob, getAllPostJob, getAllPostJobByCompany, getCompanyById, getPostJobById } from "../controllers/public.controller.js";


const publicRouter = express.Router();

publicRouter.get("/company",getAllCompany)
publicRouter.get("/company/:id",getCompanyById)
publicRouter.get("/jobs/:company_id",getAllPostJobByCompany)
publicRouter.get("/jobs",getAllPostJob)
publicRouter.get("/jobs/:id",getPostJobById)
publicRouter.get("/jobs/type/:typejob",getAllJobpostsByTypeJob)


export default publicRouter;