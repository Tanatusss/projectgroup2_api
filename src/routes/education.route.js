import express from "express";
import {
  listAllEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation,
} from "../controllers/education.controller.js";
import { authCheck } from "../middlewares/authCheck.js";
import {
  checkProfileAccess,
  checkEducationOwnership,
} from "../middlewares/educationAccess.js";

const educationRouter = express.Router();

// educationRouter.get("/profiles/:id/educations", () => console.log("Get Education By Id"))
// educationRouter.post("/profiles/:id/educations", () => console.log("Create Education"))
// educationRouter.patch("/educations/:id", () => console.log("Edit Education By Id"))
// educationRouter.delete("/educations/:id", () => console.log("Delete Education By Id"))

// 1. แสดงข้อมูลการศึกษาทั้งหมดของ profile
educationRouter.get(
  "/profiles/:profile_id/educations",
  authCheck,
  checkProfileAccess,
  listAllEducation
);

// 2. ดูข้อมูลการศึกษารายการเดียว
educationRouter.get(
  "/educations/:id",
  authCheck,
  checkEducationOwnership,
  getEducationById
);

// 3. เพิ่มข้อมูลการศึกษาใหม่
educationRouter.post(
  "/profiles/:profile_id/educations",
  authCheck,
  checkProfileAccess,
  createEducation
);

// 4. แก้ไขข้อมูลการศึกษา
educationRouter.patch(
  "/educations/:id",
  authCheck,
  checkEducationOwnership,
  updateEducation
);

// 5. ลบข้อมูลการศึกษา
educationRouter.delete(
  "/educations/:id",
  authCheck,
  checkEducationOwnership,
  deleteEducation
);

export default educationRouter;
