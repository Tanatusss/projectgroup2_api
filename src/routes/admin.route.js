import express from "express"

const router = express.Router()

router.get("/auth/users", () => { console.log("admin get all user") })

export default router
