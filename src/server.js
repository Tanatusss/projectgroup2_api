import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import companyRouter from "./routes/company.route.js";
import jobRouter from "./routes/job.route.js";
import bookmarkRouter from "./routes/bookmark.route.js";
import applicationRouter from "./routes/appication.route.js";
import profileRouter from "./routes/profile.route.js";
import experienceRouter from "./routes/experience.route.js";
import aiRouter from "./routes/ai.route.js";
import { error } from "./utils/error.js";
import { notFound } from "./utils/not-found.js";
import provincesRouter from "./routes/provinces.route.js";
import educationRouter from "./routes/education.route.js";
import resumeRouter from "./routes/resume.route.js";
import certificateRouter from "./routes/certificate.route.js";
import skillRouter from "./routes/skill.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
	cors({
		origin: true,
		methods: ["GET", "POST", "PATCH", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);
app.use(helmet());

app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", profileRouter);
app.use("/api", experienceRouter);
app.use("/api", educationRouter);
app.use("/api", resumeRouter);
app.use("/api", certificateRouter);
app.use("/api", skillRouter);


app.use("/api", companyRouter);
app.use("/api", jobRouter);
app.use("/api", bookmarkRouter);
app.use("/api", applicationRouter);
app.use("/api", aiRouter);
app.use("/api/provinces", provincesRouter);

app.use(error)
app.use(notFound)

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
