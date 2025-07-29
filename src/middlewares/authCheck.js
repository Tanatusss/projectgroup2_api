import jwt from "jsonwebtoken"
import { createError } from "../utils/createError.js"

export function authCheck(req, res, next) {
	try {
		const header = req.headers.authorization
		
		if (!header) {
			createError(401, "unauthorized")
		}
		const token = header.split(" ")[1]
		jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
			if (error) {
				createError(401, "unauthorized")
			}
			req.user = decoded
			req.company = decoded
			next()
		})
	} catch (err) {
		next(err)
	}
}
