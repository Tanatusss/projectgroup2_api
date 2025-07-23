import express from "express";
import {
  getAllProvinces,
  searchProvinces,
} from "../controllers/provinces.controller.js";

const provincesRouter = express.Router();

provincesRouter.get("/", getAllProvinces);
provincesRouter.get("/search/:term", searchProvinces);

export default provincesRouter;
