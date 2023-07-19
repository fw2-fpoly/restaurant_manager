import { Schema, model } from "mongoose"

const promotionSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	start_date: {
		type: Date,
		default: Date.now
	},
	end_date: {
		type: Date,
		default: Date.now
	},
	discount_percentage: { // tỉ lệ áp dụng giảm giá
		type: Number,
		required: true
	},
	minimum_order_amount: { // số tiền tối thiểu đc áp dụng
		type: Number,
		required: true
	},
	created_at: {
		type: Date,
		required: Date.now
	},
	updated_at: {
		type: Date,
		required: Date.now
	}
})

export default model('Promotion', promotionSchema)