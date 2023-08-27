import jwt from "jsonwebtoken"
import createError from "http-errors"


export function signAccessToken(user) {
	const payload = {
		id: user._id,
		roles: user.roles
	}
	const options = {
		expiresIn: "2h"
	}

	const token = jwt.sign(payload, process.env.JWT_SECRET_ACCESS_TOKEN, options)
	return token
}

export function signRefeshToken(user) {
	const payload = {
		id: user._id,
		roles: user.roles
	}
	const options = {
		expiresIn: "30d"
	}

	const token = jwt.sign(payload, process.env.JWT_SECRT_REFRESH_TOKEN, options)
	return token
}

export function verifyRefreshToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRT_REFRESH_TOKEN, (err, decode) => {
			if (err) {
				reject(createError.Unauthorized(err.message))
			}

			resolve(decode)
		})
	})
}

export function verifyAccessToken(req, res, next) {
	const token = req.headers?.authorization?.split(" ")[1];

	if (!token) {
		return next(createError.Unauthorized("Vui lòng đăng nhập"));
	}

	jwt.verify(token, process.env.JWT_SECRET_ACCESS_TOKEN, (err, payload) => {
		if (err) {
			return next(createError.Unauthorized(err.message));
		}

		req.user = payload;
		next();
	});
}