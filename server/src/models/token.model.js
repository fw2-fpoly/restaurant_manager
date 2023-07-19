import { Schema, model } from "mongoose"


const tokenSchema = new Schema({
	user_id: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	token: {
		type: String,
		required: true
	},
	created_at: {
		type: Number,
		required: true,
	},
	expires_at: {
		type: Number,
		required: true
	}
}, {
	collection: "tokens",
	timestamps: false,
})

export default model('Token', tokenSchema)