import { Schema, model } from "mongoose"

const tableSchema = new Schema({
	order_id: {
		type: Schema.Types.ObjectId,
		ref: 'Order'
	},
	reservation_id: {
		type: Schema.Types.ObjectId,
		ref: "Reservation"
	},
	table_number: {  //bàn số bao nhiêu
		type: Number,
		default: 1
	},
	capacity: {
		type: Number, // sức chứa của bàn
		default: 6
	},
	status: {
		type: String,
		enum: ["available", "occupied", "reserved", "unavailable"],
		default: "user",
	},
	location: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: false
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
	collection: 'tables',
	timestamps: false
})

export default model('Table', tableSchema)