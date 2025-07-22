import { promptTemplate } from "../ai_utils/promptTemplate.js"
import { userSchema } from "../ai_utils/aiSchema.js"
import { llm } from "../ai_utils/llm_model.js"
import { createError } from "../utils/createError.js"
import { serviceAiSearch } from "../services/ai.service.js"

export const aiSearch = async (req, res, next) => {
	try {
		const text = req.body.text
		if (!text) {
			createError(400, "you need to input text")
		}
		const structured_llm = llm.withStructuredOutput(userSchema)
		const prompt = await promptTemplate.invoke({ text: text, });
		let aiResponse = await structured_llm.invoke(prompt);
		const response = await serviceAiSearch(aiResponse)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}
