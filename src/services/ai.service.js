import prisma from "../config/prisma.js"

export const serviceAiSearch = async (keywords) => {
	const {
		age,
		education,
		expectedSalary,
		gender,
		preferJobCategory,
		preferJobField,
		preferJobLocation,
		preferJobTitle,
		skills,
		workingExperience
	} = keywords
	const result = await prisma.jobPost.findMany({
		where: { salary: { gte: expectedSalary } }
	})
	return result
}
