import express from "express";
import {
  getAllDistricts,
  searchDistrict,
} from "../controllers/districts.controller.js";

const districtsRouter = express.Router();

districtsRouter.get("/", getAllDistricts);
districtsRouter.get("/search/:term", searchDistrict);

export default districtsRouter;
