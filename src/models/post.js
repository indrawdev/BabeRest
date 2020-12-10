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
   bookings: [{
      type: Schema.Types.ObjectId,
      ref: 'Booking'
   }],
   reviews: [{
      type: Schema.Types.ObjectId,
      ref: 'Review'
   }],
   histories: [{
      type: Schema.Types.ObjectId,
      ref: 'History'
   }],
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
}, {
   timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export default Post