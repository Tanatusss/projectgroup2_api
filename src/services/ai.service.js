import prisma from "../config/prisma.js"

export const serviceKeywordsSearch = async (keywords) => {
	const {
		education,
		expectedSalary,
		preferJobField,
		preferJobLocation,
		preferJobTitle,
		skills,
	} = keywords
	const result = await prisma.jobPost.findMany({
		where: {
			OR: [
				{ title: { contains: preferJobTitle } },
				{ salary: { gte: expectedSalary } },
				{ address: { contains: preferJobLocation } },
				{ jobDescription: { search: `*${preferJobTitle}*` } },
				{ jobDescription: { contains: `*${preferJobLocation}*` } },
				{ jobDescription: { search: `*${preferJobField}*` } },
				{ jobDescription: { search: `*${skills}*` } },
				{ jobRequirement: { search: `*${education}*` } },
				{ jobRequirement: { contains: `*${skills}*` } },
			],
			AND: { status: "ACTIVE" }
		},
		include: {
			company: {
				select: { companyname: true, logoimage: true },

			}
		}
	})
	console.log("result: ", result)
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
