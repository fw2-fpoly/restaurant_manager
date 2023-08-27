import bcryptjs from "bcryptjs"
import createError from "http-errors"
import moment from "moment/moment"
import { v4 as uuidv4 } from "uuid"
import { signAccessToken, signRefeshToken, verifyRefreshToken } from "../middlewares/jwt.middleware"
import User from "../models/user.model"
import { sendEmail } from "../utils/email"
import { loginSchema, registerSchema, updateUserInfoSchema } from "../validations"


export async function login(req, res, next) {
	try {
		const { email, password } = req.body
		const { error } = loginSchema.validate(req.body, { abortEarly: false });

		if (error) {
			const errors = {};
			error.details.forEach((e) => (errors[e.path] = e.message));
			throw createError.BadRequest(errors);
		}

		const doc = await User.findOne({
			email
		})

		const checkPassword = await bcryptjs.compare(password, doc.password)

		if (!doc || !checkPassword) {
			throw createError.Unauthorized('Email hoặc mật khẩu không chính xác')
		}

		const accessToken = signAccessToken({
			_id: doc._id,
			roles: doc.roles
		})

		const refreshToken = signRefeshToken({
			_id: doc._id,
			roles: doc.roles
		})

		const optionsCookie = {
			httpOnly: true,
			maxAge: 60 * 24 * 60 * 1000,
			sameSite: 'none',
			secure: true
		}

		res.cookie('refresh_token', refreshToken, optionsCookie)

		// 
		doc.password = undefined

		return res.json({
			status: 200,
			message: "Thành công",
			data: {
				user: doc,
				access_token: accessToken
			},
		})
	} catch (error) {
		next(error)
	}
}

export async function register(req, res, next) {
	try {
		const { error } = registerSchema.validate(req.body, { abortEarly: false });

		if (error) {
			const errors = {};
			error.details.forEach((e) => (errors[e.path] = e.message));
			throw createError.BadRequest(errors);
		}

		const doc = await User.findOne({
			email: req.body.email
		})

		if (doc) {
			throw createError.BadRequest('Email đã được đăng ký tại hệ thống')
		}

		const optionsCookie = {
			httpOnly: true,
			maxAge: 15 * 60 * 1000,
			sameSite: 'none',
			secure: true
		}

		const token = uuidv4()

		res.cookie("user", {
			user: req.body,
			token
		}, optionsCookie)

		const link = `Vui lòng click vào link này để xác thực danh tính của bạn <a href='http://localhost:8080/api/auth/send-email?token=${token}'>Link</a>`

		await sendEmail({
			email: req.body.email,
		}, 'Dev-Food xác thực danh tính', link)

		return res.json({
			status: 200,
			message: "Thành công",
		})

	} catch (error) {
		next(error)
	}
}

export async function email(req, res, next) {
	try {
		const data = req?.cookies.user

		if (!data) {
			res.redirect(`${process.env.FE_URL}/verify/faild`)
		}

		const { user, token: tokenCookie } = data
		const tokenUrl = req?.query.token

		if (!user || tokenUrl != tokenCookie) {
			res.clearCookie("user");
			res.redirect(`${process.env.FE_URL}/verify/faild`)
		}

		const doc = await User.create(user)
		const accessToken = signAccessToken(doc)
		doc.password = undefined

		res.clearCookie("user")
		res.redirect(`${process.env.FE_URL}/verify/success`)


		return res.status(201).json({
			status: 201,
			message: "Thành công",
			data: {
				user: doc,
				access_token: accessToken
			}
		})

	} catch (error) {
		next(error)
	}
}

export async function refreshToken(req, res, next) {
	try {
		const token = req.cookies.refresh_token

		if (!token) {
			throw createError.Unauthorized('Unauthorized.....')
		}

		const decode = await verifyRefreshToken(token)
		const accessToken = signAccessToken(decode)

		return res.json({
			status: 200,
			message: "Thành công",
			data: {
				access_token: accessToken
			}
		})
	} catch (error) {
		next(error)
	}
}

export async function logout(req, res, next) {
	try {
		const token = req.cookies.refresh_token

		if (!token) {
			throw createError.Unauthorized('Unauthorized.....')
		}

		res.clearCookie("refresh_token")

		return res.json({
			status: 200,
			message: "Thành công",
			data: []
		})
	} catch (error) {
		next(error)
	}
}

export async function userInfo(req, res, next) {
	try {
		const user = req.user
		const doc = await User.findById(user.id).select(['-_id', '-password', '-roles', '-email'])

		return res.json({
			status: 200,
			message: "Thành công",
			data: doc
		})

	} catch (error) {
		next(error)
	}
}

export async function updateUserInfo(req, res, next) {
	try {
		const { id } = req.user
		const { error } = updateUserInfoSchema.validate(req.body, { abortEarly: false });

		if (error) {
			const errors = {};
			error.details.forEach((e) => (errors[e.path] = e.message));
			throw createError.BadRequest(errors);
		}

		const doc = await User.findOneAndUpdate({
			_id: id
		}, {
			$set: { ...req.body, updated_at: moment().toISOString() }
		}, {
			new: true
		})

		return res.json({
			status: 200,
			message: "Thành công",
			data: doc
		})
	} catch (error) {
		next(error)
	}
}