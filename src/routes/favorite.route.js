import express from "express"
// import * as profileController from "../controllers/profile.controller.js"
import { authCheck } from "../middlewares/authCheck.js"

const favoriteRouter = express.Router()

favoriteRouter.get("/favorite",authCheck , )
favoriteRouter.post("/favorite", authCheck,)
favoriteRouter.delete("/favorite/:id", authCheck, )









export default favoriteRouter