import { embeddings } from "../ai_utils/llm_model.js"


function cosineSimilarity(baseText, inputText) {
	const dot = baseText.reduce((sum, val, i) => sum + val * inputText[i], 0);
	const normBase = Math.sqrt(baseText.reduce((sum, val) => sum + val ** 2, 0));
	const normInput = Math.sqrt(inputText.reduce((sum, val) => sum + val ** 2, 0));
	return dot / (normBase * normInput);
}

async function rateSimilarrity(base, textArr) {
	const similarityList = [];
	const baseTextVector = await embeddings.embedQuery(base)
	for (let i = 0; i < textArr.length; i++) {
		const text = textArr[i]?.text;
		const textVector = await embeddings.embedQuery(text)
		const similarity = cosineSimilarity(baseTextVector, textVector)
		const new_obj = { id: textArr[i].id, similarity: similarity }
		similarityList.push(new_obj)
		console.log("rating:", similarity.toFixed(4))
	}
	const maxRating = Math.max(...similarityList.map(text => text.similarity))
	const index = similarityList.findIndex((rating) => rating.similarity == maxRating)
	console.log(maxRating)
	console.log(index)
	console.log(similarityList)
}

const test_text = [
	{ id: 1, text: "i am engineer", query: "a" },
	{ id: 2, text: "i am 30 year old engineer", query: "b" },
	{ id: 3, text: "i live in bangkok looking for a job", query: "c" },
	{ id: 4, text: "i am looking for a job", query: "d" },
	{ id: 5, text: "i like to sleep", query: "e" },
]
const base_text = "i am 30 year old male i live in bangkok civil engineer graduated working experience 7 year looking for a job salary around 50000 i have skill in project management and earth work i want nearby where i live"
rateSimilarrity(base_text, test_text)

