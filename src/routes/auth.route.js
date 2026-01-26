import { register } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { registerSchema } from "../validators/auth.validate.js";
import express from "express";

const router = express.Router();

router.post("/register", validate(registerSchema), register);

export default router;

