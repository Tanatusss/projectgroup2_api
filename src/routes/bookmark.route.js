import express from "express"
import * as bookmarkController from "../controllers/bookmarktype.controller.js"
import { authCheck } from "../middlewares/authCheck.js"

const bookmarkRouter = express.Router()

bookmarkRouter.get("/bookmark/:user_id", authCheck, bookmarkController.getBookmarkedTypejobs)
bookmarkRouter.get("/bookmark/:user_id/:typejob", authCheck, bookmarkController.getJobsByTypejob)
bookmarkRouter.post("/bookmark", authCheck, bookmarkController.bookmarkTypejob)
bookmarkRouter.delete("/bookmark/:user_id/:typejob", authCheck, bookmarkController.unbookmarkTypejob)






export default bookmarkRouter