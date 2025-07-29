import { prisma } from "../config/prisma.js";

//convert ID string to number
const toInt = (v) => (v === undefined ? undefined : Number(v));

//เอาข้อมูลการศึกษาโดย profile_id เรียงตาม graduationYear
export const getAllEducationByProfileId = async (eduData) => {
  try {
    const education = await prisma.education.findMany({
      where: {
        profile_id: toInt(profile_id),
      },
      orderBy: {
        graduationYear: "desc",
      },
    });
    return education;
  } catch (error) {
    throw new Error("Error fetching education data");
  }
};

//ดึงออกมาจาก ID เดียวเพื่อโชว์ในกล่องแก้ไขข้อมูล
export const getEducationbyID = async (id) => {
  try {
    const education = await prisma.education.findUnique({
      where: { id: toInt(id) },
    });
    return education;
  } catch (error) {
    throw new Error("Error fetching education data by ID");
  }
};

export const createEducationByProfileId = async (profileId, eduData) => {
  try {
    const education = await prisma.education.create({
      data: {
        ...eduData,
        profile_id: toInt(profileId),
      },
    });
    return education;
  } catch (error) {
    throw new Error("Error creating education data");
  }
};

export const updatePartialEducationById = async (id, eduData) => {
  try {
    const education = await prisma.education.update({
      where: { id: toInt(id) },
      data: eduData,
    });
    return education;
  } catch (error) {
    throw new Error("Error updating education data");
  }
};
export const deleteEducationById = async (id) => {
  try {
    await prisma.education.delete({
      where: { id: toInt(id) },
    });
    return { success: true, message: "Education deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting education data");
  }
};
