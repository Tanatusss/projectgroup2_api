import express from "express";
import {
  listAllEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/education.controller.js";
import { authCheck } from "../middlewares/authCheck.js";


const educationRouter = express.Router();

educationRouter.get("/profiles/:profile_id/educations",authCheck,listAllEducation)
educationRouter.post("/profiles/:profile_id/educations",authCheck,createEducation)
educationRouter.patch("/educations/:id",authCheck,updateEducation)
educationRouter.delete("/educations/:id",authCheck,deleteEducation)


export default educationRouter;
