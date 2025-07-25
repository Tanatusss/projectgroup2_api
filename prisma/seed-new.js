import prisma from "../src/config/prisma.js";
import { companyData } from "./seeds/companies.js";
import { jobData } from "./seeds/jobs.js";
import { districts } from "./seeds/districts.js";
import { adminData, userData } from "./seeds/usersAndAdmins.js";
// import { languages } from "./seeds/languages.js"; // Skip for now - requires profile_id
//npm run seed
async function seedDB() {
  try {
    console.log("Starting database seeding...");

    // Seed districts first (foreign key reference)
    console.log("Seeding districts...");
    await prisma.district.createMany({
      data: districts,
      skipDuplicates: true,
    });
    console.log(`Seeded ${districts.length} districts`);

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

    //seed users
    console.log("Seeding users...");
    await prisma.user.createMany({
      data: userData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${userData.length} users`);

    //seed admins
    console.log("Seeding admins...");
    await prisma.user.createMany({
      data: adminData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${adminData.length} admins`);

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
