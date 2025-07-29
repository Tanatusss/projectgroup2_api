import prisma from "../config/prisma.js";

// Helper function: แปลง ID ที่อาจเป็น string ให้เป็น number
const toInt = (v) => (v === undefined || v === null ? undefined : Number(v));

// เอาข้อมูลการศึกษาโดย profile_id เรียงตาม graduationYear
export const getAllEducationByProfileId = async (profileId) => {
  try {
    const education = await prisma.education.findMany({
      where: {
        profile_id: toInt(profileId),
      },
      orderBy: {
        graduationYear: "desc",
      },
    });
    return education;
  } catch (error) {
    console.error("Error fetching education data:", error);
    throw new Error("Error fetching education data");
  }
};

// ดึงออกมาจาก ID เดียวเพื่อโชว์ในกล่องแก้ไขข้อมูล
export const getEducationbyID = async (id) => {
  try {
    const education = await prisma.education.findUnique({
      where: { id: toInt(id) },
    });
    return education; // จะเป็น null ถ้าไม่เจอข้อมูล
  } catch (error) {
    console.error("Error fetching education by ID:", error);
    throw new Error("Error fetching education data by ID");
  }
};

// สร้างข้อมูลการศึกษาใหม่
export const createEducationByProfileId = async (profileId, eduData) => {
  try {
    // กำหนดว่า graduationYear ต้องเป็นตัวเลข
    const data = {
      ...eduData,
      profile_id: toInt(profileId),
      // ถ้ามี graduationYear ก็แปลงเป็น Number
      ...(eduData.graduationYear && {
        graduationYear: Number(eduData.graduationYear),
      }),
    };

    const education = await prisma.education.create({ data });
    return education;
  } catch (error) {
    console.error("Error creating education:", error);
    throw new Error("Error creating education data");
  }
};

// อัพเดตข้อมูลการศึกษา
export const updatePartialEducationById = async (id, eduData) => {
  try {
    // แปลง graduationYear เป็น Number ถ้ามีการส่งมา
    if (eduData.graduationYear !== undefined) {
      eduData.graduationYear = Number(eduData.graduationYear);
    }

    const education = await prisma.education.update({
      where: { id: toInt(id) },
      data: eduData,
    });
    return education;
  } catch (error) {
    //ถ้า prisma ไม่พบข้อมูลที่จะแก้ไข จะโยน error P2025
    // ถ้าไม่พบข้อมูล (P2025) ให้ส่งคืนค่า null แทนที่จะโยน error
    if (error.code === "P2025") {
      return null; // ไม่พบข้อมูลที่จะแก้ไข
    }
    console.error("Error updating education:", error);
    throw new Error("Error updating education data");
  }
};

// ลบข้อมูลการศึกษา
export const deleteEducationById = async (id) => {
  try {
    await prisma.education.delete({
      where: { id: toInt(id) },
    });
    return { success: true, message: "Education deleted successfully" };
  } catch (error) {
    if (error.code === "P2025") {
      return null; // ไม่พบข้อมูลที่จะลบ
    }
    console.error("Error deleting education:", error);
    throw new Error("Error deleting education data");
  }
};
