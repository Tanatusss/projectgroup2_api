import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors({
	origin: true,
	methods: ["GET", "POST", "PATCH", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(helmet());

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`)
});
