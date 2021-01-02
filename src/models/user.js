import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
	email: {
		type: String, lowercase: true, unique: true, trim: true
	},
	password: {
		type: String, trim: true
	},
	level: {
		type: String
	},
	is_active: {
		type: Boolean
	},
	posts: [{
		type: Schema.Types.ObjectId,
		ref: 'Post'
	}],
	reviews: [{
		type: Schema.Types.ObjectId,
		ref: 'Review'
	}],
	favorites: [{
		type: Schema.Types.ObjectId,
		ref: 'Favorite'
	}],
	bookings: [{
		type: Schema.Types.ObjectId,
		ref: 'Booking'
	}],
	histories: [{
		type: Schema.Types.ObjectId,
		ref: 'History'
	}],
	profile: {
		type: Schema.Types.ObjectId,
		ref: 'Profile'
	}
}, {
	timestamps: true,
})

const User = mongoose.model('User', userSchema)

export default User