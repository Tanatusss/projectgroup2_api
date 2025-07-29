import express from "express";
import {} from "../middlewares/authCheck.js";

const educationRouter = express.Router();

// educationRouter.get("/profiles/:id/educations", () => console.log("Get Education By Id"))
// educationRouter.post("/profiles/:id/educations", () => console.log("Create Education"))
// educationRouter.patch("/educations/:id", () => console.log("Edit Education By Id"))
// educationRouter.delete("/educations/:id", () => console.log("Delete Education By Id"))

export default educationRouter;
