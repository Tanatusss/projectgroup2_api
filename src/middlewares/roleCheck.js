import { createError } from "../utils/createError.js"

export const roleCheck = (allowRole) => (req, res, next) => {
	try {
		const role = req.user.role
		if (!role) {
			createError(401, "unauthorized")
		}
		if (!allowRole.includes(role)) {
			createError(401, `only ${allowRole} can do this`)
		}
		next()
	} catch (err) {
		next(err)
	}
}
