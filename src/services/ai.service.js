import prisma from "../config/prisma.js"

export const serviceKeywordsSearch = async (keywords) => {
	const {
		age,
		education,
		expectedSalary,
		preferJobField,
		preferJobLocation,
		preferJobTitle,
		skills,
		workingExperience
	} = keywords
	const result = await prisma.jobPost.findMany({
		where: {
			title: { search: `*${preferJobTitle}*` },
			jobDescription: {
				search: `*manage*`
			},
			salary: { gte: expectedSalary },
			address: {
				search: `*${preferJobLocation}*`
			},
			jobRequirement: {
				search: `*${skills}*`
			},
			status: "ACTIVE"
		}
	})
	return result
}

export const getPromptDbByCategory = async (category) => {
	const result = await prisma.prompt.findMany({
		where: { category }
	})
	return result
}

export const addToPromptDb = async (data) => {
	const result = prisma.prompt.create({
		data
	})
}
