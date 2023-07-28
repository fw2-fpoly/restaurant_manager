import { Schema, model } from 'mongoose'
import bcryptjs from "bcryptjs"

const userSchema = new Schema({
	first_name: {
		type: String,
		required: true
	},
	last_name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	roles: {
		type: String,
		enum: ["user", "editor", "admin"],
		default: "user",
	},
	date_of_birth: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}
}, {
	collection: "users",
	timestamps: false,
	versionKey: false
})

userSchema.pre("save", async function (next) {
	try {
		const hashPassword = await bcryptjs.hash(this.password, 10);
		this.password = hashPassword;
		next();
	} catch (error) {
		next(error)
	}
});

userSchema.pre("updateOne", async function (next) {
	try {
		const hashPassword = await bcryptjs.hash(this.getUpdate().$set.password, 10);
		this.getUpdate().$set.password = hashPassword;
		next();
	} catch (error) {
		next(error)
	}
});

export default model("User", userSchema)