//ปลื้มทำ ถ้าบัค ขอภัยด้วย
// src/controllers/districts.controller.js
import * as districtService from "../services/district.service.js";

//ยิงเอาก้อนจังหวัดทั้งหมด
export const getAllDistricts = async (req, res) => {
  try {
    const districts = await districtService.findAllDistricts();
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
export const searchDistricts = async (req, res) => {
  const term = req.params.term; // user path params , api/provinces/search/:term

  try {
    const districts = await districtService.findDistrictsByTerm(term);
    res.json({ success: true, data: districts, searchTerm: term });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching districts",
      error: error.message,
    });
  }
};
