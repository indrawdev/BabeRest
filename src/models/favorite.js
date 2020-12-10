import mongoose from 'mongoose'

const { Schema } = mongoose

const favoriteSchema = new Schema({
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

const Favorite = mongoose.model('Favorite', favoriteSchema)

export default Favorite