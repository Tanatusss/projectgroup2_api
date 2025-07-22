import { createError } from "../utils/createError.js";
import bcrypt, { compare } from 'bcryptjs';
import prisma from '../config/prisma.js'
import { createUser, findUser } from "../services/user.service.js";
import { signToken } from "../utils/jwtUtil.js";
import crypto from "crypto";
import nodemailer from "nodemailer";


export const registerUser = async(req,res,next) => {
  try{
    const {email, password, confirmPassword} = req.body;
     if (!(email.trim() && password.trim() && confirmPassword.trim())) {
    createError(400, 'Please fill all data')
  }
    if (password != confirmPassword){
      createError(400, 'Please check confirm-password')
    }
  const user = await prisma.user.findUnique({
      where:{
        email:email,
      }
    })

    if(user){
      createError(400,'Email already exist!!!')
    }
  const hashPassword =  bcrypt.hashSync(password, 10)
  console.log(password);
  const newUser = {
    email,
    password: hashPassword
  } 
  const result = await createUser(newUser)
  res.json({message: `Register success`,result})
  
  }catch(error){
    next(error)
  }
}

export const loginUser = async(req,res,next)=>{
  try{
    const {email,password} = req.body;
    const user = await findUser(email)
    const pwOk = await bcrypt.compare(password, user.password)
    if(!pwOk){
      throw createError(401, 'Invalid Login')
    }

    const payload = {
      id: user.id,
      role: user.role
    }
    const token = signToken(payload)
    console.log("token",token)
    res.json({
      msg: 'Login success',
      token: token,
    })

  }catch(error){
    next(error)
  }
}



// ส่งลิงก์ reset password ไปที่ email
export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    // หา user จากอีเมล
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) return res.status(404).json({ message: "ไม่พบผู้ใช้นี้" });

    // สร้าง token
    const token = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 1000 * 60 * 60); // 1 ชั่วโมง

    // บันทึก token ลงฐานข้อมูล
    await prisma.resetToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt: expires
      }
    });

    // ลิงก์ reset (ในอนาคตจะชี้ไป frontend)
    const resetLink = `http://localhost:12345/api/auth/reset-password?token=${token}`;

    // ตั้งค่า email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // ต้องใช้ App Password ของ Gmail
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: `"Your App" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "ลิงก์รีเซ็ตรหัสผ่าน",
      html: `
        <p>คุณได้ทำคำขอรีเซ็ตรหัสผ่าน</p>
        <p>คลิกที่ลิงก์ด้านล่างเพื่อรีเซ็ตรหัสผ่านของคุณ:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>ลิงก์จะหมดอายุใน 1 ชั่วโมง</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.json({ message: "ส่งลิงก์รีเซ็ตรหัสผ่านเรียบร้อยแล้ว" });

  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { token, newPassword, confirmPassword } = req.body;

    if (!token || !newPassword || !confirmPassword) {
      return res.status(400).json({ message: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({ message: 'รหัสผ่านไม่ตรงกัน' });
    }

    // หา token ในฐานข้อมูล
    const resetRecord = await prisma.resetToken.findUnique({
      where: { token }
    });

    if (!resetRecord) {
      return res.status(400).json({ message: 'Token ไม่ถูกต้อง' });
    }

    // ตรวจสอบวันหมดอายุ
    if (resetRecord.expiresAt < new Date()) {
      return res.status(400).json({ message: 'Token หมดอายุแล้ว' });
    }

    // แฮชรหัสผ่านใหม่
    const hashedPassword = bcrypt.hashSync(newPassword, 10);

    // อัปเดตรหัสผ่านของ user
    await prisma.user.update({
      where: { id: resetRecord.userId },
      data: { password: hashedPassword }
    });

    // ลบ token ทิ้ง
    await prisma.resetToken.delete({
      where: { token }
    });

    res.json({ message: 'เปลี่ยนรหัสผ่านเรียบร้อยแล้ว' });

  } catch (err) {
    console.error(err);
    next(err);
  }
}

