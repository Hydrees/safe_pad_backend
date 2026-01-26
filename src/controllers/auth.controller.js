import { registerUser } from "../services/auth.service.js";

export const register = async (req, res) => {
    try {
        const userData = req.body;
        const user = await registerUser(userData);
        res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};