import { generateToken, verifyToken, hashPassword, comparePassword } from "../utils/jwt.js";
import prisma from "../config/db.js";

export const registerUser = async (userData) => {
    const { username, email, password } = userData;
    const existingUser = await prisma.user.findUnique({
        where: { email }
    });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
        data: { username, email, password: hashedPassword }
    });
    return newUser;
};
