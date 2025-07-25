import bcrypt from "bcryptjs";

const hashedPassword = bcrypt.hashSync("123456", 10);

export const userData = [
  {
    email: "user1@mail.com",
    password: hashedPassword,
    role: "USER",
  },
  {
    email: "user2@mail.com",
    password: hashedPassword,
    role: "USER",
  },
  {
    email: "user3@mail.com",
    password: hashedPassword,
    role: "USER",
  },
  {
    email: "user4@mail.com",
    password: hashedPassword,
    role: "USER",
  },
  {
    email: "user5@mail.com",
    password: hashedPassword,
    role: "USER",
  },
];

export const adminData = [
  {
    email: "admin1@mail.com",
    password: hashedPassword,
    role: "ADMIN",
  },
  {
    email: "admin2@mail.com",
    password: hashedPassword,
    role: "ADMIN",
  },
  {
    email: "admin3@mail.com",
    password: hashedPassword,
    role: "ADMIN",
  },
];
