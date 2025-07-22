import { object, ref, string, number } from "yup"


export const loginSchema = object({
	email: string(),
	password: string(),
})

export const registerUserSchema = object({
	email: string().required(),
	password: string().min(4).required(),
	confirmPassword: string().oneOf([ref("password"), null], `confirmPassword must match password`),
})

export const aiSchema = object({
	text: string().min(20, "you need to describe more to use ai search").required()
})



export const validate = (schema) => async (req, res, next) => {
	try {
		await schema.validate(req.body, { abortEarly: false })
		next()
	} catch (err) {
		const errMessage = err.errors.map((item) => item)
		const errText = errMessage.join(", ")
		const allError = new Error(errText)
		next(allError)
	}
}
