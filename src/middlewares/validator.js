import { object, ref, string, number } from "yup"

const Roles = ["USER", "ADMIN", "COMPANY"]

export const loginSchema = object({
	email: string(),
	password: string(),
})

export const registerSchema = object({
	email: string().required('กรุณากรอกemail'),
	password: string().min(4).required("กรุณากรอกpassword"),
	confirmPassword: string().oneOf([ref("password")], "รหัสผ่านไม่ตรงกัน").required("กรุณากรอกยืนยันรหัสผ่าน"),
	role: string().oneOf(Object.values(Roles)).required("missing role")
})

export const aiSchema = object({
	text: string().min(50, "you need to describe more to use ai search").required()
})


export const validate = (schema) => async (req, res, next) => {
	try {
		await schema.validate(req.body, { abortEarly: false })
		next();

	} catch (err) {
		const errMessage = err.errors.map((item) => item)
		const errText = errMessage.join(", ")
		const allError = new Error(errText)
		next(allError)
	}
}
