import prisma from "../config/prisma.js"

export const serviceKeywordsSearch = async (keywords) => {
	const {
		education,
		preferJobField,
		preferJobLocation,
		preferJobTitle,
		skills,
	} = keywords
	const result = await prisma.jobPost.findMany({
		where: {
			OR: [
				{ title: { contains: preferJobTitle } },
				{ jobDescription: { contains: preferJobTitle } },
				{ jobDescription: { contains: preferJobField } },
				{ jobDescription: { contains: skills } },
				{ jobRequirement: { contains: education } },
				{ jobRequirement: { contains: skills } },
			],
			AND: [
				{ status: "ACTIVE" },
			]
		},
		include: {
			company: {
				select: { companyname: true, logoimage: true },
			}
		},
	})
	return result
}

export const getPromptDb = async () => {
	const result = await prisma.prompt.findMany({})
	return result
}

export const addToPromptDb = async (data) => {
	const result = prisma.prompt.create({
		data
	})
	return result
}
