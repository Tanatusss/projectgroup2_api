import jwt from "jsonwebtoken"

export function signToken(payload) {
	const result = jwt.sign(payload, process.env.JWT_SECRET, { algorithm: "HS256", expiresIn: "30s" })
	return result
}

export function signRefreshToken(payload) {
	const result = jwt.sign(payload, process.env.REFRESH_SECRET, { algorithm: "HS256", expiresIn: "60d" })
	return result
}

export function decodeToken(token) {
	const result = jwt.decode(token)
	return result
}
