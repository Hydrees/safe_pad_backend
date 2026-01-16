import dotenv from "dotenv";
import prisma from "./config/db.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📊 Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`🌐 API URL: http://localhost:${PORT}`);
    });
    console.log("⏳ Connecting to database...");
    await prisma.$connect();
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  console.log("\n⛔ Server shutting down...");
  await prisma.$disconnect();
  process.exit(0);
});

startServer();
