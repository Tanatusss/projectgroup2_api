import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

const api_key = process.env.GOOGLE_API_KEY

export const llm = new ChatGoogleGenerativeAI({
	model: "gemini-2.0-flash",
	temperature: 0,
	apiKey: api_key
});

export const embeddings = new GoogleGenerativeAIEmbeddings({ apiKey: api_key })
