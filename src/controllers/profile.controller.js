import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export const getProfileById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const profile = await prisma.profileUser.findUnique({
      where: { id: parseInt(id) },
      include: {
        workExperience: true,
        education: true,
        Skills: true,
        Certificate: true,
        Languages: true,
        Resume: true,
        bookmarkType: true,
        jobApply: true
      }
    });

    if (!profile) {
      createError(404, "Profile not found")
    }

    res.json(profile);
  } catch (err) {
    next(err);
  }
};

export const updateProfileById = async (req, res, next) => {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    address,
    description,
    phone,
    provinces,
    gender,
    expectsalary,
    startdate,
    jobpreferences
  } = req.body;

  try {
    const updated = await prisma.profileUser.update({
      where: { id: parseInt(id) },
      data: {
        firstname,
        lastname,
        address,
        description,
        phone,
        provinces,
        gender,
        expectsalary,
        startdate,
        jobpreferences
      }
    });

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

