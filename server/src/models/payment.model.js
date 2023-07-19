import { Schema, model } from 'mongoose'

const paymentSchema = new Schema({
	order_id: {
		type: Schema.Types.ObjectId,
		ref: 'Order'
	},
	reservation_id: {
		type: Schema.Types.ObjectId,
		ref: 'Reservation'
	},
	payment_method: {
		type: String,
		required: true
	},
	is_successful: {
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
	collection: 'payments',
	timestamps: false
})

export default model('Payment', paymentSchema)