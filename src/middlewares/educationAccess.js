import { prisma } from "../config/prisma.js";
import { createError } from "../utils/createError.js";

/**
 * Middleware ตรวจสอบว่าผู้ใช้มีสิทธิ์เข้าถึงข้อมูลของ profile นั้นๆ หรือไม่
 */
export const checkProfileAccess = async (req, res, next) => {
  try {
    // ถ้าเป็น COMPANY หรือ ADMIN สามารถเข้าถึงได้เลย
    if (req.user.role === "COMPANY" || req.user.role === "ADMIN") {
      return next();
    }

    const profileId = parseInt(req.params.profile_id);

    // ตรวจสอบว่า user เป็นเจ้าของ profile หรือไม่
    if (req.user.profileId !== profileId) {
      return createError(
        403,
        "Access denied: You can only access your own profile"
      );
    }

    next();
  } catch (error) {
    next(error);
  }
};

/**
 * Middleware ตรวจสอบสิทธิ์การแก้ไข/ลบข้อมูล education
 */
export const checkEducationOwnership = async (req, res, next) => {
  try {
    // ถ้าเป็น ADMIN ให้เข้าถึงได้เลย
    if (req.user.role === "ADMIN") {
      return next();
    }

    const educationId = parseInt(req.params.id);

    // ดึงข้อมูล education เพื่อหา profile_id
    const education = await prisma.education.findUnique({
      where: { id: educationId },
      select: { profile_id: true },
    });

    if (!education) {
      return createError(404, "Education record not found");
    }

    // ถ้าเป็น USER ต้องเป็นเจ้าของ profile
    if (
      req.user.role === "USER" &&
      req.user.profileId !== education.profile_id
    ) {
      return createError(
        403,
        "Access denied: You can only modify your own education records"
      );
    }

    // ถ้าเป็น COMPANY ไม่มีสิทธิ์แก้ไขข้อมูล education
    if (req.user.role === "COMPANY") {
      return createError(403, "Companies cannot modify user education records");
    }

    next();
  } catch (error) {
    next(error);
  }
};
