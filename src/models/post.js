import mongoose from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema({
	type: {
		type: String, required: true
	},
	title: {
		type: String, required: true
	},
	slug: {
		type: String, required: true
	},
	images: [{
		type: Schema.Types.ObjectId,
		ref: 'Image'
	}],
	location: {
		address: {
			type: String
		},
		latt: {
			type: String
		},
		long: {
			type: String
		}
	},
	photos: [{
		type: Schema.Types.ObjectId,
		ref: 'Photo'
	}],
	bookings: [{
		type: Schema.Types.ObjectId,
		ref: 'Booking'
	}],
	reviews: [{
		creator: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		body: {
			type: String
		}
	}],
	histories: [{
		type: Schema.Types.ObjectId,
		ref: 'History'
	}],
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	}
}, {
	timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export default Post