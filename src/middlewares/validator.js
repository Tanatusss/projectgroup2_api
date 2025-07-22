import { object, ref, string, number } from "yup"


export const loginSchema = object({
	email: string(),
	password: string(),
})
export const registerUserSchema = object({
	email: string().required('กรุณากรอกemail'),
	password: string().min(4).required("กรุณากรอกpassword"),
	confirmPassword: string().oneOf([ref("password")], "รหัสผ่านไม่ตรงกัน").required("กรุณากรอกยืนยันรหัสผ่าน"),
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
