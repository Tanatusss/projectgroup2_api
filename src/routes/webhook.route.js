import express from "express";
import * as subscriptionController from "../controllers/subscription.controller.js";

const webhookRouter = express.Router();


webhookRouter.post("/", subscriptionController.stripeWebhook);

// express.raw({ type: "application/json" }),
export default webhookRouter;