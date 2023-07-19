import { Schema, model } from "mongoose"

const reservationSchema = new Schema({
	user_id: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	table_id: {
		type: Schema.Types.ObjectId,
		ref: 'Table'
	},
	reservation_time: { // thời gian đặt bàn
		type: Date,
		required: true
	},
	number_of_time: { // số lượng khách
		type: Number,
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
	collection: 'reservations',
	timestamps: true
})

export default model('Reservation', reservationSchema)