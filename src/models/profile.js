import mongoose from 'mongoose'

const { Schema } = mongoose

const profileSchema = new Schema({
	name: {
		type: String
	},
	avatar: {
		type: String
	},
	gender: {
		type: String
	},
	dob: {
		type: Date
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
}, {
	timestamps: true,
	autoCreate: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export default Profile