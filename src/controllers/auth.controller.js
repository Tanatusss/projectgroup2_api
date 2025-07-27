import { createError } from "../utils/createError.js";
import bcrypt, { compare } from 'bcryptjs';
import prisma from '../config/prisma.js'
import { createCompany, createUser, findCompany, findGoogleUser, findUser } from "../services/user.service.js";
import { signRefreshToken, signToken } from "../utils/jwtUtil.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import { getOldRefreshToken, newRefreshToken } from "../services/auth.service.js";


export const registerUser = async (req, res, next) => {
	try {
		const { email, password, confirmPassword } = req.body;
		if (!(email.trim() && password.trim() && confirmPassword.trim())) {
			createError(400, 'Please fill all data')
		}
		if (password != confirmPassword) {
			createError(400, 'Please check confirm-password')
		}
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			}
		})
		if (user) {
			createError(400, 'Email already exist!!!')
		}
		const hashPassword = bcrypt.hashSync(password, 10)
		const newUser = {
			email,
			password: hashPassword
		}

		const result = await createUser(newUser)

		await prisma.profileUser.create({
			data: {
				user_id: result.id
			}
		});

		res.json({ message: `Register success`, result })

	} catch (error) {
		next(error)
	}
}

export const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await findUser(email)
		const passwordIsValid = await bcrypt.compare(password, user.password)
		if (!passwordIsValid) {
			return createError(400, 'Invalid Login')
		}
		const payload = {
			id: user.id,
			role: user.role
		}
		const accessToken = signToken(payload)
		const refreshToken = signRefreshToken(payload)
		console.log("accessToken", accessToken)
		console.log("refreshToken", refreshToken)
		await newRefreshToken(uer.id, user.role, refreshToken)
		res.cookie("refreshToken", refreshToken, {
			httpOnly: true,
			sameSite: "strict",
			secure: true,
			maxAge: 60 * 1000
		})
		res.status(200).json({
			accessToken: accessToken,
		})

	} catch (error) {
		next(error)
	}
}
export const registerCompany = async (req, res, next) => {
	try {
		const { email, password, confirmPassword } = req.body;
		if (!(email.trim() && password.trim() && confirmPassword.trim())) {
			createError(400, 'Please fill all data')
		}
		if (password != confirmPassword) {
			createError(400, 'Please check confirm-password')
		}
		const user = await prisma.company.findUnique({
			where: {
				email: email,
			}
		})

		if (user) {
			createError(400, 'Email already exist!!!')
		}
		const hashPassword = bcrypt.hashSync(password, 10)
		console.log(password);
		const newCompany = {
			email,
			password: hashPassword
		}
		const result = await createCompany(newCompany)
		res.json({ message: `Register success`, result })

	} catch (error) {
		next(error)
	}
}

export const loginCompany = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const company = await findCompany(email)
		if (!company) {
			return createError(400, "Invalid Login")
		}
		const passwordIsValid = await bcrypt.compare(password, company.password)
		if (!passwordIsValid) {
			return createError(400, 'Invalid Login')
		}
		const payload = {
			id: company.id,
			role: company.role
		}
		const accessToken = signToken(payload)
		const refreshToken = signRefreshToken(payload)
		console.log("token", token)
		await newRefreshToken(company.id, company.role, refreshToken)
		res.cookie("refreshToken", refreshToken, {
			httpOnly: true,
			sameSite: "strict",
			secure: true,
			maxAge: 60 * 1000
		})
		res.status(200).json({
			accessToken,
		})

	} catch (error) {
		next(error)
	}
}



// ส่งลิงก์ reset password ไปที่ email
export const forgotPassword = async (req, res, next) => {
	try {
		const { email } = req.body;

		// หา user จากอีเมล
		const user = await prisma.user.findUnique({ where: { email } });

		if (!user) return res.status(404).json({ message: "ไม่พบผู้ใช้นี้" });

		// สร้าง token
		const token = crypto.randomBytes(32).toString("hex");
		const expires = new Date(Date.now() + 1000 * 60 * 60); // 1 ชั่วโมง

		// บันทึก token ลงฐานข้อมูล
		await prisma.resetToken.create({
			data: {
				token,
				userId: user.id,
				expiresAt: expires
			}
		});

		// ลิงก์ reset (ในอนาคตจะชี้ไป frontend)
		const resetLink = `http://localhost:12345/api/auth/reset-password?token=${token}`;

		// ตั้งค่า email
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL_USER, // ต้องใช้ App Password ของ Gmail
				pass: process.env.EMAIL_PASS
			}
		});

		const mailOptions = {
			from: `"Your App" <${process.env.EMAIL_USER}>`,
			to: email,
			subject: "ลิงก์รีเซ็ตรหัสผ่าน",
			html: `
        <p>คุณได้ทำคำขอรีเซ็ตรหัสผ่าน</p>
        <p>คลิกที่ลิงก์ด้านล่างเพื่อรีเซ็ตรหัสผ่านของคุณ:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>ลิงก์จะหมดอายุใน 1 ชั่วโมง</p>
      `
		};

		await transporter.sendMail(mailOptions);

		res.json({ message: "ส่งลิงก์รีเซ็ตรหัสผ่านเรียบร้อยแล้ว" });

	} catch (err) {
		console.error(err);
		next(err);
	}
};

export const resetPassword = async (req, res, next) => {
	try {
		const { token, newPassword, confirmPassword } = req.body;

		if (!token || !newPassword || !confirmPassword) {
			return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
		}

		if (newPassword !== confirmPassword) {
			return res.status(400).json({ message: 'รหัสผ่านไม่ตรงกัน' });
		}

		// หา token ในฐานข้อมูล
		const resetRecord = await prisma.resetToken.findUnique({
			where: { token }
		});

		if (!resetRecord) {
			return res.status(400).json({ message: 'Token ไม่ถูกต้อง' });
		}

		// ตรวจสอบวันหมดอายุ
		if (resetRecord.expiresAt < new Date()) {
			return res.status(400).json({ message: 'Token หมดอายุแล้ว' });
		}

		// แฮชรหัสผ่านใหม่
		const hashedPassword = bcrypt.hashSync(newPassword, 10);

		// อัปเดตรหัสผ่านของ user
		await prisma.user.update({
			where: { id: resetRecord.userId },
			data: { password: hashedPassword }
		});

		// ลบ token ทิ้ง
		await prisma.resetToken.delete({
			where: { token }
		});

		res.json({ message: 'เปลี่ยนรหัสผ่านเรียบร้อยแล้ว' });

	} catch (err) {
		console.error(err);
		next(err);
	}
}

export const userSignInGoogle = async (req, res, next) => {
	try {
		const { email, sub } = req.body
		const user = await findGoogleUser(sub, email)

	} catch (err) {
	}
	return
}

export const companySignInGoogle = async (req, res, next) => {
	try {
	} catch (err) {
	}
	return
}

export const refreshAccessToken = async (req, res, next) => {
	try {
		const oldToken = req.cookies.refreshToken
		console.log(oldToken)
		if (!oldToken) {
			return createError(401, "no refresh token")
		}
		const id = req?.user.id
		const role = req?.user.role
		const oldRefreshToken = await getOldRefreshToken(role, oldToken)
		if (!oldRefreshToken) {
			return createError(401, "no refresh token")
		}
		if (new Date() < oldRefreshToken.expiredAt) {
			return createError(401, "refresh token expired")
		}
		const newRefreshToken = signRefreshToken({ id, role })
		const newAccessToken = signToken({ id, role })
		await newRefreshToken(id, role, newRefreshToken)
		res.cookie("refreshToken", newRefreshToken, {
			httpOnly: true,
			sameSite: "strict",
			secure: true,
			maxAge: 60 * 1000
		})
	} catch (err) {
		next(err)
	}
}
