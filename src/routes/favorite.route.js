import express from "express"
import * as favoriteController from "../controllers/favorite.controller.js"
import { authCheck } from "../middlewares/authCheck.js"

const favoriteRouter = express.Router()

favoriteRouter.get("/favorite",authCheck , favoriteController.getFavoriteJobs)
favoriteRouter.post("/favorite", authCheck, favoriteController.addFavoriteJob)
favoriteRouter.delete("/favorite/:id", authCheck, favoriteController.removeFavoriteJob)









export default favoriteRouter