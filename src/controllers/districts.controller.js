import prisma from "../config/prisma.js";
//ยิงเอาก้อนอำเภอทั้งหมด. api/districts
export const getAllDistricts = async (req, res) => {
  try {
    const districts = await prisma.district.findMany({
      select: {
        districtNameEn: true,
        districtNameTh: true,
      },
    });
    console.log("Districts for dropdown:", districts); // See the shape in your backend logs
    res.json({ success: true, data: districts });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching districts",
      error: error.message,
    });
  }
};
//เอาแค่จังหวัดที่พิมพ์ค้นหา
export const searchDistrict = async (req, res) => {
  const term = req.params.term; // user path params , api/districts/search/:term

  try {
    const districts = await prisma.district.findMany({
      where: {
        OR: [
          { districtNameEn: { contains: term } },
          { districtNameTh: { contains: term } },
        ],
      },
    });
    res.json({ success: true, data: districts, searchTerm: term });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching districts",
      error: error.message,
    });
  }
};
