import { object, ref, string, number } from "yup"


export const loginSchema = object({
	email: string(),
	password: string(),
})
export const registerSchema = object({
	email: string(),
	password: string(),
	confirmPassword: string().oneOf([ref("password"), null]),
})


export const validate = (schema) => async (req, res, next) => {
	try {
		await schema.validate(req.body, { abortEarly: false })
	} catch (err) {
		const errMessage = err.errors.map((item) => item)
		const errText = errMessage.join(", ")
		const allError = new Error(errText)
		next(allError)
	}
}
