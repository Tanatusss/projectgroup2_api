import express from "express";
import cors from "cors";
import helmet from "helmet";
import publicRouter from "./routes/public.route.js"
import userRouter from "./routes/user.route.js"
import companyRouter from "./routes/company.route.js"
import adminRouter from "./routes/admin.route.js"
import { error } from "./utils/error.js";
import { notFound } from "./utils/not-found.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
	origin: true,
	methods: ["GET", "POST", "PATCH", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(helmet());

app.use("/api", publicRouter)
app.use("/api", userRouter)
app.use("/api", companyRouter)
app.use("/api", adminRouter)

app.use(error)
app.use(notFound)

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`)
});
