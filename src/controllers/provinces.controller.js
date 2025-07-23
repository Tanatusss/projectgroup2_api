import prisma from "../config/prisma.js";

export const getAllProvinces = async (req, res) => {
  try {
    const provinces = await prisma.province.findMany({
      select: {
        provinceNameEn: true,
        provinceNameTh: true,
      },
    });
    console.log("Provinces for dropdown:", provinces); // See the shape in your backend logs
    res.json({ success: true, data: provinces });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching provinces",
      error: error.message,
    });
  }
};

export const searchProvinces = async (req, res) => {
  const term = req.params.term; // user path params , api/provinces/search/:term

  try {
    const provinces = await prisma.province.findMany({
      where: {
        OR: [
          { provinceNameEn: { contains: term } },
          { provinceNameTh: { contains: term } },
        ],
      },
    });
    res.json({ success: true, data: provinces, searchTerm: term });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching provinces",
      error: error.message,
    });
  }
};
