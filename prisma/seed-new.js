import prisma from "../src/config/prisma.js";
import { companyProfileData } from "./seeds/companies.js";
import { jobData } from "./seeds/jobs.js";
import { districts } from "./seeds/districts.js";
import { adminData, companyData, userData } from "./seeds/usersAndAdmins.js";
import { educationData } from "./seeds/education.js";
import { profileData } from "./seeds/profiles.js";
import { workExperienceData } from "./seeds/workExperience.js";

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

    //seed users
    console.log("Seeding users...");
    await prisma.user.createMany({
      data: userData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${userData.length} users`);

    //seed hr
    await prisma.user.createMany({
      data: companyData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${companyData.length} HR users`);

    //seed admins
    console.log("Seeding admins...");
    await prisma.user.createMany({
      data: adminData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${adminData.length} admins`);

    // Seed companies
    console.log("Seeding companies...");
    await prisma.company.createMany({
      data: companyProfileData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${companyProfileData.length} companies`);

    // Seed job posts
    console.log("Seeding job posts...");
    await prisma.jobPost.createMany({
      data: jobData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${jobData.length} job posts`);

    // Seed profiles (must be done before education)
    console.log("Seeding user profiles...");
    const profileResult = await prisma.profileUser.createMany({
      data: profileData,
      skipDuplicates: true,
    });
    console.log(
      `Actually created ${profileResult.count} user profiles (attempted ${profileData.length})`
    );

    //seed education data
    console.log("Seeding education data...");

    const educationResult = await prisma.education.createMany({
      data: educationData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${educationResult.count} education records`);

    console.log("Database seeding completed successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
    throw error;
  }

  // Seed work experience data
  console.log("Seeding work experience data...");
  const experienceResult = await prisma.workExperience.createMany({
    data: workExperienceData,
    skipDuplicates: true,
  });
  console.log(`Seeded ${experienceResult.count} work experience records`);
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
