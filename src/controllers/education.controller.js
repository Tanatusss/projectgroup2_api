import {
  getAllEducationByProfileId,
  getEducationbyID,
  createEducationByProfileId,
  updatePartialEducationById,
  deleteEducationById,
} from "../services/education.service.js";

// Get all education records for a specific profile
export const listAllEducation = async (req, res, next) => {
  try {
    const profileId = parseInt(req.params.profile_id);
    const education = await getAllEducationByProfileId(profileId);
    res.json({ success: true, data: education });
  } catch (error) {
    next(error);
  }
};

// Get certain education record by ID when click edit
export const getEducationById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const education = await getEducationbyID(id);
    if (!education) {
      return res
        .status(404)
        .json({ success: false, message: "Education not found" });
    }
    res.json({ success: true, data: education });
  } catch (error) {
    next(error);
  }
};

// Create new education record by profile ID
export const createEducation = async (req, res, next) => {
  try {
    const profileId = parseInt(req.params.profile_id);
    const eduData = req.body;

    // Validate input data - ชื่อฟิลด์ต้องตรงกับ schema
    if (
      !eduData.institute ||
      !eduData.qualification ||
      !eduData.graduationYear
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    // ตรวจสอบว่า graduationYear เป็นตัวเลข
    if (isNaN(Number(eduData.graduationYear))) {
      return res
        .status(400)
        .json({ success: false, message: "Graduation year must be a number" });
    }

    const newEducation = await createEducationByProfileId(profileId, eduData);
    res.status(201).json({ success: true, data: newEducation });
  } catch (error) {
    next(error);
  }
};

// Update education record by education ID
export const updateEducation = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const eduData = req.body;

    // ตรวจสอบความถูกต้องของข้อมูล (เฉพาะฟิลด์ที่ส่งมา)
    if (
      (eduData.institute !== undefined && !eduData.institute.trim()) ||
      (eduData.qualification !== undefined && !eduData.qualification.trim()) ||
      (eduData.graduationYear !== undefined &&
        isNaN(Number(eduData.graduationYear)))
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid field values" });
    }

    // แปลง graduationYear เป็น number ถ้ามีการส่งมา
    if (eduData.graduationYear !== undefined) {
      eduData.graduationYear = Number(eduData.graduationYear);
    }

    const updatedEducation = await updatePartialEducationById(id, eduData);
    res.json({ success: true, data: updatedEducation });
  } catch (error) {
    next(error);
  }
};

// Delete education record by ID
export const deleteEducation = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await deleteEducationById(id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Education not found" });
    }
    res.json({ success: true, message: "Education deleted successfully" });
  } catch (error) {
    next(error);
  }
};
