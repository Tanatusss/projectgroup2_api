import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";


export async function newRefreshToken(id, role, refreshToken) {
	if (!role) {
		return createError(400, "role is missing")
	}
	const userDb = ["USER", "ADMIN"]
	if (userDb.includes(role)) {
		const result = await prisma.userRefreshToken.create({
			data: {
				userId: id,
				token: refreshToken,
				expiredAt: new Date(Date.now() + 60 * 1000) // 60 days
			}
		})
		return result
	}
	if (role === "COMPANY") {
		const result = await prisma.companyRefreshToken.create({
			data: {
				companyId: id,
				token: refreshToken,
				expiredAt: new Date(Date.now() + 60 * 1000) // 60 days
			}
		})
		return result
	}
	return createError(400, "something wrong while create refresh token")
}

export async function getOldRefreshToken(role, refreshToken) {
	if (!role) {
		return createError(400, "role is missing")
	}
	const userDb = ["USER", "ADMIN"]
	if (userDb.includes(role)) {
		const result = await prisma.userRefreshToken.findFirst({
			where: { token: refreshToken }
		})
		return result
	}
	if (role === "COMPANY") {
		const result = await prisma.companyRefreshToken.findFirst({
			where: { token: refreshToken }
		})
		return result
	}
	return createError(400,)
}
