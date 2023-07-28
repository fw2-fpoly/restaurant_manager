import jwt from "jsonwebtoken"
import createError from "http-errors"


export function signAccessToken(user) {
	const payload = {
		id: user._id,
		roles: user.roles
	}
	const options = {
		expiresIn: "3h"
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