import mongoose from 'mongoose'

const { Schema } = mongoose

const imageSchema = new Schema({
	name: {
		type: String
	},
	post: {
		type: Schema.Types.ObjectId,
		ref: 'Post'
	}
}, {
	timestamps: true,
	autoCreate: true,
})

const Image = mongoose.model('Image', imageSchema)

export default Image