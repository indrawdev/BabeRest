import mongoose from 'mongoose'

const { Schema } = mongoose

const historySchema = new Schema({
	post: {
		type: Schema.Types.ObjectId,
		ref: 'Post'
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
}, {
	timestamps: true,
	autoCreate: true,
})

const History = mongoose.model('History', historySchema)

export default History