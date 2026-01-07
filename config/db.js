import { pkg }  from "@prisma/client";

const { PrismaClient } = pkg;
const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "info", "warn", "error"]
        : ["error"],
    errorFormat: "pretty",
  });

// ✔ Prevent multiple instances in development
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
