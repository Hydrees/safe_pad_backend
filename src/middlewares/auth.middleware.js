import { verifyToken } from "../utils/jwt.js";
import prisma from "../config/db.js";


export const requireAuth = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }
    const token = auth.split(" ")[1];
    const payload = verifyToken(token);
    if (!payload) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const user = await prisma.user.findUnique({ where: { id: payload.sub } });
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }
    req.user = { id: user.id, role: user.role, email: user.email };
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
