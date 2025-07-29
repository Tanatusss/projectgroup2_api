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

export const findGoogleUser = async (email) => {
	return await prisma.user.findFirst({
		where: { email }
	})

}
