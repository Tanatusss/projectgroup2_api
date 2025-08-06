import express from "express";
import cors from "cors";
import helmet from "helmet";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import companyRouter from "./routes/company.route.js";
import jobRouter from "./routes/jobpost.route.js";
import bookmarkRouter from "./routes/bookmark.route.js";
import profileRouter from "./routes/profile.route.js";
import experienceRouter from "./routes/experience.route.js";
import aiRouter from "./routes/ai.route.js";
import { error } from "./utils/error.js";
import { notFound } from "./utils/not-found.js";
import cookieParser from "cookie-parser";
import educationRouter from "./routes/education.route.js";
import resumeRouter from "./routes/resume.route.js";
import certificateRouter from "./routes/certificate.route.js";
import skillRouter from "./routes/skill.route.js";
import languageRouter from "./routes/language.route.js";
import publicRouter from "./routes/public.route.js";
import favoriteRouter from "./routes/favorite.route.js";
import questionRouter from "./routes/question.route.js";
import applyJobRouter from "./routes/applyjob.route.js";
import subscriptionRouter from "./routes/subscription.route.js";
import webhookRouter from "./routes/webhook.route.js";


const app = express();
const PORT = process.env.PORT || 3000;


app.use((req, res, next) => {
	if (req.originalUrl === "/webhook") {
		express.raw({ type: "application/json" })(req, res, next);
	} else {
		express.json()(req, res, next);
	}
});




// app.use(express.json());

app.use(
	cors({
		origin: true,
		methods: ["GET", "POST", "PATCH", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true
	})
);
app.use(helmet());
app.use(cookieParser())

app.use("/webhook", webhookRouter);
app.use("/api", authRouter);
app.use("/api", userRouter);
app.use("/api", profileRouter);
app.use("/api", experienceRouter);
app.use("/api", educationRouter);
app.use("/api", resumeRouter);
app.use("/api", certificateRouter);
app.use("/api", skillRouter);
app.use("/api", languageRouter);
app.use("/api", publicRouter)
app.use("/api", favoriteRouter);
app.use("/api", questionRouter);
app.use("/api", applyJobRouter);
app.use("/api", subscriptionRouter);







app.use("/api", companyRouter);
app.use("/api", jobRouter);
app.use("/api", bookmarkRouter);
app.use("/api", aiRouter);

app.use(error);
app.use(notFound);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});
