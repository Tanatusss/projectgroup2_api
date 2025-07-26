import prisma from "../config/prisma.js";


export const createUser = async (userData) => {
	return await prisma.user.create({ data: userData })
}


export const findUser = async (email) => {
	return await prisma.user.findFirst({
		where: {
			email
		}
	})
}


export const createCompany = async (companyData) => {
	return await prisma.company.create({ data: companyData })
}

export const findCompany = async (email) => {
	return await prisma.company.findFirst({
		where: {
			email
		}
	})
}

export const findGoogleUser = async (userId, email) => {
	const id = Number(userId)
	const user = await prisma.user.findFirst({
		where: { id, email }
	})
	if (!user) {
		return await prisma.user.create({
			data: { id, email }
		})
	}
}

export const findGoogleCompany = async (userId, email) => {
	const id = Number(userId)
	const company = await prisma.company.findFirst({
		where: { id, email }
	})
	if (!company) {
		return await prisma.company.create({
			data: { id, email }
		})
	}
}
