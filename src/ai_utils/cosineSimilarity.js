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
		const text = textArr[i];
		const textVector = await embeddings.embedQuery(text)
		const similarity = cosineSimilarity(baseTextVector, textVector)
		similarityList.push(similarity)
		console.log("rating:", similarity.toFixed(4))
	}
	console.log(similarityList)
}

