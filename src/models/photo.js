import mongoose from 'mongoose'

const { Schema } = mongoose

const photoSchema = new Schema({
	post: {
		type: Schema.Types.ObjectId,
		ref: 'Post'
	},
	file: {
		type: String
	}
}, {
	timestamps: true,
	autoCreate: true
})

const Photo = mongoose.model('Photo', photoSchema)

export default Photo