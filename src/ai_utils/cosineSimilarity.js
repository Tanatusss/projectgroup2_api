import { embeddings } from "../ai_utils/llm_model.js"


function cosineSimilarity(baseText, inputText) {
	const dot = baseText.reduce((sum, val, i) => sum + val * inputText[i], 0);
	const normBase = Math.sqrt(baseText.reduce((sum, val) => sum + val ** 2, 0));
	const normInput = Math.sqrt(inputText.reduce((sum, val) => sum + val ** 2, 0));
	return dot / (normBase * normInput);
}

export async function rateSimilarity(base, textArr) {
	const similarityList = [];
	const baseTextVector = await embeddings.embedQuery(base)
	for (let i = 0; i < textArr.length; i++) {
		const text = textArr[i]?.text;
		const keywords = textArr[i]?.keywords;
		const textVector = await embeddings.embedQuery(text)
		const similarity = cosineSimilarity(baseTextVector, textVector)
		const new_obj = { id: textArr[i].id, similarity: similarity.toFixed(4), keywords }
		similarityList.push(new_obj)
	}
	const maxRating = Math.max(...similarityList.map(text => text.similarity))
	const index = similarityList.findIndex((rating) => rating.similarity == maxRating)
	console.log(maxRating)
	console.log(index)
	console.log(similarityList)
	console.log(similarityList[index])
	if (index < 0) {
		return { similarity: 0 }
	}
	return similarityList[index]
}
