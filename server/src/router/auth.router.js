import express from "express";
import { login, register, email } from "../controllers/auth.controller";

const router = express.Router()

router.post("/login", login)
router.post("/register", register)
router.get("/send-email", email)

export default router