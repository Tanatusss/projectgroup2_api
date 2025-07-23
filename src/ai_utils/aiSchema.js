import { z } from "zod";

export const userSchema = z.object({
	age: z.optional(z.number()).describe("age of person in year"),
	gender: z.optional(z.string()).describe("gender of user"),
	skills: z.optional(z.string()).describe("skill of user that might relate to job"),
	education: z.optional(z.string()).describe("education background of user"),
	workingExperience: z.optional(z.number()).describe("amout of experience user have in year"),
	expectedSalary: z.optional(z.number()).describe("the salary user would like to get"),
	preferJobTitle: z.optional(z.string()).describe("job title user prefered"),
	preferJobCategory: z.optional(z.string()).describe("job category user prefered"),
	preferJobField: z.optional(z.string()).describe("job fields user prefered"),
	preferJobLocation: z.optional(z.string()).describe("city or district user prefer to work"),
});

