import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.route.js";

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => res.json({ message: "SafePad API running" }));

export default app;
