import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";


export async function newRefreshToken(id, refreshToken) {
	const result = await prisma.userRefreshToken.create({
		data: {
			userId: id,
			token: refreshToken,
			expiredAt: new Date(Date.now() + 60 * 1000) // 60 days
		}
	})
	return result
}

export async function getOldRefreshToken(refreshToken) {
	const result = await prisma.userRefreshToken.findFirst({
		where: { token: refreshToken }
	})
	return result
}
