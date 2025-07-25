import prisma from "../src/config/prisma.js";
import { companyData } from "./seeds/companies.js";
import { jobData } from "./seeds/jobs.js";
import { provinces } from "./seeds/provinces.js";

async function seedDB() {
  try {
    console.log("Starting database seeding...");

    // Seed provinces first (foreign key reference)
    console.log("Seeding provinces...");
    await prisma.province.createMany({
      data: provinces,
      skipDuplicates: true,
    });
    console.log(`Seeded ${provinces.length} provinces`);

    // Seed companies
    console.log("Seeding companies...");
    await prisma.company.createMany({
      data: companyData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${companyData.length} companies`);

    // Seed jobs
    console.log("Seeding jobs...");
    await prisma.jobPost.createMany({
      data: jobData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${jobData.length} job posts`);

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
    throw error;
  }
}

seedDB()
  .then(() => {
    console.log("SEEDING COMPLETE");
  })
  .catch((err) => {
    console.error("SEEDING FAILED:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Database connection closed");
  });
