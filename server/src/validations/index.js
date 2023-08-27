import joi from "joi"


export const loginSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().required()
})

export const registerSchema = joi.object({
	first_name: joi.string().required(),
	last_name: joi.string().required(),
	password: joi.string().required(),
	email: joi.string().email().required(),
	phone: joi.string().required(),
	address: joi.string().required(),
	image: joi.string().required(),
	roles: joi.string().optional().default('user'),
	date_of_birth: joi.string().required(),
	gender: joi.string().required(),
	created_at: joi.string().default(() => new Date()),
	updated_at: joi.string().default(() => new Date())
})


