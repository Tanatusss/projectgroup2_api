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
    district,
    classification,
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
        district,
        classification,
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

export const updateProfileByIdWithWorkEx = async (req, res, next) => {
  const { id } = req.params;
  const {
    firstname,
    lastname,
    address,
    description,
    phone,
    district,
    classification,
    gender,
    expectsalary,
    startdate,
    jobpreferences,
    workExperience 
  } = req.body;

  try {
    
    const updatedProfile = await prisma.profileUser.update({
      where: { id: parseInt(id) },
      data: {
        firstname,
        lastname,
        address,
        description,
        phone,
        district,
        classification,
        gender,
        expectsalary,
        startdate,
        jobpreferences
      }
    });

    
    if (Array.isArray(workExperience)) {
      
      await prisma.workExperience.deleteMany({
        where: { profile_id: parseInt(id) }
      });

      
      if (workExperience.length > 0) {
        await prisma.workExperience.createMany({
          data: workExperience.map(exp => ({
            profile_id: parseInt(id),
            jobPosition: exp.jobPosition,
            companyname: exp.companyname,
            salary: exp.salary,
            startDate: exp.startDate,
            endDate: exp.endDate,
          }))
        });
      }
    }

    res.json({ message: "Profile updated", updatedProfile });
  } catch (err) {
    next(err);
  }
};

