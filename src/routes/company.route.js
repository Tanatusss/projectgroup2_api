import express from "express"

const router = express.Router()

router.post("/company/post", () => console.log("company post job"))

export default router
