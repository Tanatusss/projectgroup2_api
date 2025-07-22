import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export async function getAllUsers(req, res, next) {
  const allUsers = await prisma.user.findMany({
    orderBy: {id: "asc"}
  })

const usersWithoutSensitive = allUsers.map(({ password, role, ...user }) => user);

  res.json({users: usersWithoutSensitive})
}

export async function getUserById(req, res, next) {
  const {id} = req.params

  const foundUserById = await prisma.user.findUnique({
    where: {id : +id}
  })
  if(!foundUserById){
    createError(404, "User not found")
  }

  const {password : pw, password, role, ...userData} = foundUserById


  res.json({user: userData})
}

// export async function EditUser(req, res, next) {
//   console.log("Forgot password")
// }

export async function deleteUser(req, res, next) {
 const {id} = req.params

 const foundUserById = await prisma.user.findUnique({
    where: {id : +id}
  })

  if(!foundUserById){
    createError(404, "User not found")
  }

  const deleteUserById = await prisma.user.delete({
    where: {id: +id}
  })

  res.json({message: "Delete done"})
}