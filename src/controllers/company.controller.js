import prisma from "../config/prisma.js";
import { uploadToCloudinary } from "../services/cloudinary.service.js";
import { updateCompany } from "../services/company.service.js";
import { createError } from "../utils/createError.js";


export const getCompanyById = async (req, res, next) => {
	try {
		const { company_id } = req.params
		console.log("deez", company_id)
		const company = await prisma.company.findFirst({
			where: {
				user_id: +company_id
			}
		})
		if (!company) {
			return createError(404, "company not found")
		}
		res.status(200).json({ company })

	} catch (err) {
		next(err)
	}
}


export const updatecompany = async (req, res, next) => {
	try {
		const { company_id } = req.params;
		const { hrfirstname, hrlastname, companyname, phone, address, image_bg, logoimage, link, taxnumber, billaddress } = req.body;

		let image_bg_url = null;
		let logoimage_url = null;
		if (req.files) {
			if (req.files.image_bg) {
				image_bg_url = await uploadToCloudinary(req.files.image_bg[0]);
			}
			if (req.files.logoimage) {
				logoimage_url = await uploadToCloudinary(req.files.logoimage[0]);
			}
		}

		const newCompany = await updateCompany(company_id, {
			hrfirstname,
			hrlastname,
			companyname,
			phone,
			address,
			...(image_bg_url && { image_bg: image_bg_url }),
			...(logoimage_url && { logoimage: logoimage_url }),
			link,
			taxnumber,
			billaddress
		})
		if (isNaN(company_id)) {
			return res.status(400).json({ msg: "company_id ต้องเป็นตัวเลข" });
		}
		res.json({
			msg: "Update company success",
			company: newCompany,
		})

	} catch (error) {
		next(error)
	}
}

