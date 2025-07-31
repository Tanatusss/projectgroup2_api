// ตัวอย่างการใช้ Roles จาก schema ใหม่
import jwt from "jsonwebtoken";
import { createError } from "../utils/createError.js";
import pkg from "@prisma/client"; // นำเข้า Prisma Client
const { Roles } = pkg;

export function authCheck(req, res, next) {
  try {
    const header = req.headers.authorization;
    if (!header) {
      return createError(401, "unauthorized");
    }
    const token = header.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        return createError(401, "unauthorized");
      }
      req.user = decoded;
      req.company = decoded;
      next();
    });
  } catch (err) {
    next(err);
  }
}

// ตรวจสอบว่าเป็น company หรือ admin เอาไว้ใช้ใน route ที่ต้องการให้เฉพาะ company หรือ admin เข้าถึงได้ เช่นดูโปรไฟล์ประวัติของผู้สมัครงาน
export function companyOrAdminOnly(req, res, next) {
  try {
    if (req.user.role !== Roles.COMPANY && req.user.role !== Roles.ADMIN) {
      return createError(403, "Access denied: Company or Admin only");
    }
    next();
  } catch (err) {
    next(err);
  }
}

// ตรวจสอบความเป็นเจ้าของโปรไฟล์หรือเป็น COMPANY/ADMIN
export function profileOwnerOrCompanyOrAdmin(req, res, next) {
  try {
    // User ปกติต้องเป็นเจ้าของโปรไฟล์เท่านั้น
    if (
      req.user.role === Roles.USER &&
      req.user.profileId !== parseInt(req.params.profile_id)
    ) {
      return createError(
        403,
        "Access denied: You can only view your own profile"
      );
    }
    // Company และ Admin สามารถเข้าถึงโปรไฟล์ใดๆ ได้
    next();
  } catch (err) {
    next(err);
  }
}
