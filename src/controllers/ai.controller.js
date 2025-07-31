import { promptTemplate } from "../ai_utils/promptTemplate.js"
import { userSchema } from "../ai_utils/aiSchema.js"
import { llm } from "../ai_utils/llm_model.js"
import { createError } from "../utils/createError.js"
import { addToPromptDb, getPromptDb, serviceKeywordsSearch } from "../services/ai.service.js"
import { rateSimilarity } from "../ai_utils/cosineSimilarity.js"


export const aiSearch = async (req, res, next) => {
	const acceptable_similarity = 0.8500
	try {
		const { text } = req.body
		if (!text) {
			createError(400, "you need to input text")
		}
		const prompt_db_response = await getPromptDb()
		const maxSimilarity = await rateSimilarity(text, prompt_db_response)
		let keywords;
		if (maxSimilarity.similarity > acceptable_similarity) {
			keywords = await JSON.parse(maxSimilarity.keywords)
			console.log("use keyword from maxSimilarity")
			console.log(keywords)
		}
		else {
			console.log("use ai")
			const structured_llm = llm.withStructuredOutput(userSchema)
			const prompt = await promptTemplate.invoke({ text: text, });
			let aiResponse = await structured_llm.invoke(prompt);
			console.log(aiResponse)
			keywords = aiResponse
			const newKeywords = JSON.stringify(aiResponse)
			const data = { text, keywords: newKeywords }
			const result = await addToPromptDb(data)
			console.log(result)
		}
		console.log("keywords: ", keywords)
		const response = await serviceKeywordsSearch(keywords)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}
