import { createError } from "../utils/createError.js";
import bcrypt from 'bcryptjs';
import prisma from '../config/prisma.js'
import { createUser } from "../services/user.service.js";



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

