import { Schema, model } from "mongoose"

const foodSchema = new Schema({
	category_id: {
		type: Schema.Types.ObjectId,
		ref: 'Category'
	},
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	estime: {
		type: String,
		required: true
	},
	image: {
		id: String,
		path: String
	},
	images: [{
		id: String,
		path: String
	}],
	is_avaiable: { // check xem có sẵn hay không
		type: Boolean,
		default: false
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
	collection: "foods",
	timestamps: false
})

export default model('Food', foodSchema)