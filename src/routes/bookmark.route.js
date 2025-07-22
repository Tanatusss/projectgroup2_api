import express from "express"

const bookmarkRouter = express.Router()

bookmarkRouter.get("/bookmark", () => {console.log("Get All Bookmark")})
bookmarkRouter.post("/bookmark", () => {console.log("Click Bookmark")})
bookmarkRouter.delete("/bookmark/:bookmark_id", () => {console.log("Cancel Bookmark")})






export default bookmarkRouter