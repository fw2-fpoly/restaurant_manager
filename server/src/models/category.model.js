import { Schema, model } from "mongoose"

const categorySchema = new Schema({
	foods: [
		{
			type: Schema.Types.ObjectId,
			ref: "Food"
		}
	],
	name: {
		type: String,
		required: true
	},
	icon: {
		type: String,
		required: true
	},
	description: {
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
	collection: "categories",
	timestamps: false
})

export default model('Category', categorySchema)