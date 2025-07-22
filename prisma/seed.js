import prisma from "../src/config/prisma.js";
import bcrypt from "bcryptjs"

const hashedPassword = bcrypt.hashSync("123456", 10)


const companyData = [
	{ name: "companyName", email: "test1@gmail.com", password: hashedPassword, phone: 1234567890, address: "bangkok" },
]

const jobData = [
	{ company_id: 1, title: "developer", jobDescription: "develop", address: "bangkok", salary: 15000, jobRequirement: "can dev" },
]

async function seedDB() {
	await prisma.company.createMany({ data: companyData, skipDuplicates: true })
	await prisma.jobPost.createMany({ data: jobData, skipDuplicates: true })
}

seedDB().then(console.log("SEEDED"))
	.catch(err => console.log(err))
	.finally(prisma.$disconnect())
