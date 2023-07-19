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