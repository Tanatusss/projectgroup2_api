import express from "express"
import { authCheck } from "../middlewares/authCheck.js"
import * as languageController from "../controllers/language.controller.js"

const languageRouter = express.Router()

languageRouter.get("/profiles/:id/languages", authCheck, languageController.getLanguages)
languageRouter.post("/profiles/:id/languages", authCheck, languageController.createLanguage)
languageRouter.patch("/profiles/:id/languages/:language_id", authCheck, languageController.updateLanguage)
languageRouter.delete("/profiles/:id/languages/:language_id", authCheck, languageController.deleteLanguage)








export default languageRouter