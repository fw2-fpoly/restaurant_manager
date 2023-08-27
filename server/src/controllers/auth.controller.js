import bcryptjs from "bcryptjs"
import createError from "http-errors"

export async function login(req, res, next) {
	try {
		// logic xử lý

		// trong trường lợp mà muốn bắt lỗi
		// VD: throw createError.BadRequest("Email chưa được đăng ký");

		return res.json({
			status: 200,
			message: "Thành công",
			data: [],
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

}