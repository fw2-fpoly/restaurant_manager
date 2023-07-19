import { Schema, model } from 'mongoose'

const orderSchema = new Schema({
	user_id: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},
	table_id: {
		type: Schema.Types.ObjectId,
		ref: "Table"
	},
	promotion_id: {
		type: Schema.Types.ObjectId,
		ref: 'Promotion'
	},
	items: [
		{
			id: {
				type: Schema.Types.ObjectId,
				ref: "Food"
			},
			price: {
				type: Number,
				required: true
			},
			quantity: {
				type: Number,
				required: true
			}
		}
	],
	total_amount: {
		type: Number,
		required: true
	},
	estime_total: {
		type: Number,
		required: true
	},
	is_taken_away: {
		type: Boolean,
		default: false
	},
	status: {
		type: String,
		enum: ['processing', "confirmed", "delivering", "cancelled", "delivered"],
		default: "processing",
	},
	payment_status: {
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
})

export default model('Order', orderSchema)