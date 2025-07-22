import express from "express"

const router = express.Router()

router.get("/getme", () => console.log("user get me"))

export default router
