import { promptTemplate } from "../ai_utils/promptTemplate.js"
import { userSchema } from "../ai_utils/aiSchema.js"
import { llm, embeddings } from "../ai_utils/llm_model.js"
import { createError } from "../utils/createError.js"
import { addToPromptDb, getPromptDbByCategory, serviceKeywordsSearch } from "../services/ai.service.js"
import { rateSimilarity } from "../ai_utils/cosineSimilarity.js"

// for test delete later
const testResponse = {
	address: "bangkok",
	age: 30,
	education: "civil engineer graduated",
	expectedSalary: 10000,
	gender: "male",
	preferJobCategory: "civil engineer",
	preferJobField: "civil engineer",
	preferJobLocation: "bangkok",
	preferJobTitle: "civil engineer",
	skills: "project management, earth work",
	workingExperience: 7
}
// for test delete later
const testDatabase = [
	{ id: 1, text: "i am engineer", keywords: {} },
	{ id: 2, text: "i am engineer live in bangkok", keywords: {} },
	{ id: 3, text: "i live in bangkok my career is engineer but i am looking for a new job with saraly more than 30000 and want to work near where i live", keywords: [] },
	{ id: 4, text: "i am engineer student live in bangkok looking for a job with saraly more than 20000", keywords: {} },
	{ id: 5, text: "i am looking for a job with salry more than 15000", keywords: {} },
]

export const aiSearch = async (req, res, next) => {
	const acceptable_similarity = 0.8500
	try {
		const { text, category } = req.body
		if (!text) {
			createError(400, "you need to input text")
		}
		const prompt_db_response = await getPromptDbByCategory(category)
		const maxSimilarity = await rateSimilarity(text, prompt_db_response)
		let keywords;
		if (maxSimilarity.similarity > acceptable_similarity) {
			keywords = JSON.parse(maxSimilarity.keywords)

			console.log("use keyword from maxSimilarity")
			console.log(keywords)
		}
		else {
			console.log("use ai")
			//const structured_llm = llm.withStructuredOutput(userSchema)
			//const prompt = await promptTemplate.invoke({ text: text, });
			//let aiResponse = await structured_llm.invoke(prompt);
			await addToPromptDb(newKeywords)
		}
		const response = await serviceKeywordsSearch(keywords)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}
