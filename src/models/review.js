import mongoose from 'mongoose'

const { Schema } = mongoose

const reviewSchema = new Schema({
   post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
   },
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
}, {
   timestamps: true
})

const Review = mongoose.model('Review', reviewSchema)

export default Review