import express from "express";
import { login, register, email, refreshToken, logout, userInfo, updateUserInfo } from "../controllers/auth.controller";
import { verifyAccessToken } from "../middlewares/jwt.middleware"

const router = express.Router()

router.get("/send-email", email)
router.get("/user-info", [verifyAccessToken], userInfo)
router.get("/refresh-token", refreshToken)
router.post("/login", login)
router.post("/register", register)
router.put("/user-info", [verifyAccessToken], updateUserInfo)
router.delete("/logout", logout)

export default router