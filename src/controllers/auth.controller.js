import { createError } from "../utils/createError.js";
import bcrypt, { compare } from 'bcryptjs';
import prisma from '../config/prisma.js'
import { createUser, findUser } from "../services/user.service.js";
import { signToken } from "../utils/jwtUtil.js";



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