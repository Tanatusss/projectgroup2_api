import { z } from "zod";

export const userSchema = z.object({
	age: z.optional(z.number()).describe("age of person in year"),
	skills: z.optional(z.string()).describe("skill of user that might relate to job if user have multiple return comma separate"),
	education: z.optional(z.string()).describe("education background of user"),
	workingExperience: z.optional(z.number()).describe("amout of experience user have in year"),
	expectedSalary: z.optional(z.number()).describe("the salary user would like to get"),
	preferJobTitle: z.optional(z.string()).describe("job title user prefered if user prefer multiple return comma separate"),
	preferJobField: z.optional(z.string()).describe("job fields user prefered if user prefer multiple return comma separate"),
	preferJobLocation: z.optional(z.string()).describe("city or district user prefer to work"),
});

