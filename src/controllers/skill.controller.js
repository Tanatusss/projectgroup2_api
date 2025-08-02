import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";



export const getSkillsByProfileId = async (req, res, next) => {
	const { id } = req.params;

	try {
		const profileId = parseInt(id);
		const skills = await prisma.skills.findMany({
			where: { profile_id: profileId },
		});

		res.json(skills);
	} catch (err) {
		next(err);
	}
};


export const updateSkillsByProfileId = async (req, res, next) => {
	const { id } = req.params;
	const { skills } = req.body;

	if (!Array.isArray(skills)) {
		return next(createError(400, "Skills must be an array"));
	}

	try {
		const profileId = parseInt(id);


		await prisma.skills.deleteMany({
			where: { profile_id: profileId },
		});


		const createdSkills = await prisma.skills.createMany({
			data: skills.map((name) => ({
				name: name.value,
				profile_id: profileId,
			})),
		});

		res.json({ message: "Updated skills successfully", count: createdSkills.count });
	} catch (err) {
		next(err);
	}
};
