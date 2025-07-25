import express from "express";
import {
  getAllDistricts,
  searchDistricts,
} from "../controllers/districts.controller.js";

const districtsRouter = express.Router();

districtsRouter.get("/", getAllDistricts);
districtsRouter.get("/search/:term", searchDistricts);

export default districtsRouter;
