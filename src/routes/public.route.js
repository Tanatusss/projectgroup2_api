import express from "express"

const router = express.Router()

router.post("/register", () => { console.log("register user") })
router.post("/login", () => { console.log("login user") })
router.post("/register-company", () => { console.log("register company") })
router.post("/login-company", () => { console.log("login company") })

export default router
