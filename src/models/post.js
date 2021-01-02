import mongoose from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema({
	type: {
		type: String
	},
	title: {
		type: String
	},
	slug: {
		type: String
	},
	images: [{
		type: Schema.Types.ObjectId,
		ref: 'Image'
	}],
	location: {
		type: Schema.Types.ObjectId,
		ref: 'Location'
	},
	maps: [{
		latt: {
			type: String
		},
		long: {
			type: String
		}
	}],
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
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
}, {
	timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export default Post