import prisma from "../src/config/prisma.js";
import { companyProfileData } from "./seeds/companies.js";
import { jobData } from "./seeds/jobs.js";
import { adminData, companyData, userData } from "./seeds/usersAndAdmins.js";
import { educationData } from "./seeds/education.js";
import { profileData } from "./seeds/profiles.js";
import { workExperienceData } from "./seeds/workExperience.js";
import { questionAllData } from "./seeds/question.js";

// import { languages } from "./seeds/languages.js"; // Skip for now - requires profile_id
//npm run seed
async function seedDB() {
  try {
    console.log("Starting database seeding...");

    // 1. Seed users ก่อน (ต้องมีก่อน companies)
    console.log("Seeding users...");
    await prisma.user.createMany({
      data: userData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${userData.length} users`);

    // 2. Seed HR users
    console.log("Seeding HR users...");
    await prisma.user.createMany({
      data: companyData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${companyData.length} HR users`);

    // 3. Seed admins
    console.log("Seeding admins...");
    await prisma.user.createMany({
      data: adminData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${adminData.length} admins`);

    // 4. Seed companies (หลังจาก users แล้ว)
    console.log("Upserting companies...");
for (const company of companyProfileData) {
  // ตรวจสอบว่า user_id มีอยู่จริง
  const userExists = await prisma.user.findUnique({
    where: { id: company.user_id }
  });
  
  if (!userExists) {
    console.error(`Skipping company - User with id ${company.user_id} not found`);
    continue;
  }

  const existingCompany = await prisma.company.findFirst({
    where: { user_id: company.user_id }
  });
  
  try {
    if (existingCompany) {
      // อัปเดตถ้ามีอยู่แล้ว
      await prisma.company.update({
        where: { id: existingCompany.id },
        data: {
          companyname: company.companyname,
          phone: company.phone,
          address: company.address,
          logoimage: company.logoimage,
          image_bg: company.image_bg,
          link: company.link,
          taxnumber: company.taxnumber,
          billaddress: company.billaddress,
          hrfirstname: company.hrfirstname,
          hrlastname: company.hrlastname,
          description: company.description,
          websitecompany: company.websitecompany,
          industrytype: company.industrytype,
          companysize: company.companysize,
          primarylocation: company.primarylocation,
          companyvision: company.companyvision,
          package: company.package,
        }
      });
      console.log(`Updated company for user_id: ${company.user_id}`);
    } else {
      // สร้างใหม่ถ้ายังไม่มี
      await prisma.company.create({
        data: company
      });
      console.log(`Created company for user_id: ${company.user_id}`);
    }
  } catch (error) {
    if (error.code === 'P2002' && error.meta?.target?.includes('phone')) {
      console.warn(`Skipping company for user_id ${company.user_id} - Phone ${company.phone} already exists`);
      continue;
    }
    throw error; // Re-throw other errors
  }
}

    // 5. Seed job posts (หลังจาก companies แล้ว)
    console.log("Seeding job posts...");
    await prisma.jobPost.createMany({
      data: jobData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${jobData.length} job posts`);

    // 6. Seed profiles
    console.log("Seeding user profiles...");
    const profileResult = await prisma.profileUser.createMany({
      data: profileData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${profileResult.count} user profiles`);

    // 7. Seed education
    console.log("Seeding education data...");
    const educationResult = await prisma.education.createMany({
      data: educationData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${educationResult.count} education records`);

    // 8. Seed work experience
    console.log("Seeding work experience data...");
    const experienceResult = await prisma.workExperience.createMany({
      data: workExperienceData,
      skipDuplicates: true,
    });
    console.log(`Seeded ${experienceResult.count} work experience records`);

    // 9. Seed questions
    console.log("Seeding questions and answers...");
    for (const question of questionAllData) {
      const createdQuestion = await prisma.questionData.create({
        data: {
          typejob: question.typejob,
          question: question.question,
        },
      });

      if (question.answerData && question.answerData.create) {
        await prisma.answerData.createMany({
          data: question.answerData.create.map((ans) => ({
            text: ans.text,
            questionId: createdQuestion.id,
          })),
        });
      }
    }

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
