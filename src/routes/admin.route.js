import express from "express";
import { authCheck } from "../middlewares/authCheck.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { deleteCompanyById } from "../controllers/admin.controller.js";


const adminRouter = express.Router();

adminRouter.delete('/company/:id',authCheck,isAdmin,deleteCompanyById);





export default adminRouter;