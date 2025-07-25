import prisma from "../config/prisma.js";

export const findAllDistricts = async () => {
  return await prisma.district.findMany({
    select: {
      districtNameEn: true,
      districtNameTh: true,
    },
  });
};

export const findDistrictsByTerm = async (term) => {
  return await prisma.district.findMany({
    where: {
      OR: [
        { districtNameEn: { contains: term } },
        { districtNameTh: { contains: term } },
      ],
    },
  });
};
