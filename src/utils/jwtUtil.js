import jwt from "jsonwebtoken"

export function signToken(payload) {
	const result = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: "HS256", expiresIn: "14d" })
	return result
}
