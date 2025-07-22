import express from "express"
import { aiSearch } from "../controllers/ai.controller.js"
import { validate, aiSchema } from "../middlewares/validator.js"

const router = express.Router()

router.post("/ai/search", validate(aiSchema), aiSearch)


export default router
