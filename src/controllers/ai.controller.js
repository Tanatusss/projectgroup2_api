import { promptTemplate } from "../ai_utils/promptTemplate.js"
import { userSchema } from "../ai_utils/aiSchema.js"
import { llm, embeddings } from "../ai_utils/llm_model.js"
import { createError } from "../utils/createError.js"
import { serviceAiSearch } from "../services/ai.service.js"

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


function cosineSimilarity(baseText, inputText) {
	const dot = baseText.reduce((sum, val, i) => sum + val * inputText[i], 0);
	const normBase = Math.sqrt(baseText.reduce((sum, val) => sum + val ** 2, 0));
	const normInput = Math.sqrt(inputText.reduce((sum, val) => sum + val ** 2, 0));
	return dot / (normBase * normInput);
}


export const aiSearch = async (req, res, next) => {
	try {
		const text = req.body.text
		if (!text) {
			createError(400, "you need to input text")
		}

		//const structured_llm = llm.withStructuredOutput(userSchema)
		//const prompt = await promptTemplate.invoke({ text: text, });
		//let aiResponse = await structured_llm.invoke(prompt);
		const response = await serviceAiSearch(testResponse)
		res.status(200).json({ result: response })
	} catch (err) {
		next(err)
	}
}
