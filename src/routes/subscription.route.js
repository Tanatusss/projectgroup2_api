import express from "express";
import { authCheck } from "../middlewares/authCheck.js";
import * as subscriptionController from "../controllers/subscription.controller.js";


const subscriptionRouter = express.Router();

subscriptionRouter.post("/checkout", authCheck, subscriptionController.checkoutSession);
subscriptionRouter.get("/status", authCheck, subscriptionController.getSubscriptionStatus);
subscriptionRouter.get("/plans", subscriptionController.getPackagePlans);

export default subscriptionRouter;