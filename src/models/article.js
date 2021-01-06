import mongoose from 'mongoose'

const { Schema } = mongoose

const articleSchema = new Schema({
	title: {
		type: String
	},
	slug: {
		type: String
	},
	image: {
		type: Schema.Types.ObjectId,
		ref: 'Image'
	},
	body: {
		type: Text
	}
}, {
	timestamps: true,
	autoCreate: true
})

const Article = mongoose.model('Article', articleSchema)

export default Article