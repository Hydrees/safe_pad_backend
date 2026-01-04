
require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const noteRoutes = require("./routes/notes.routes");

const app = express();
app.use(express.json());

app.use(cors({
     origin: "http://localhost:5173",
     credentials: true
 }));

// Connect DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
