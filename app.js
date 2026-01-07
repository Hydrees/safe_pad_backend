import express from "express";
import cors from "cors";

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => res.json({ message: "SafePad API running" }));

export default app;
