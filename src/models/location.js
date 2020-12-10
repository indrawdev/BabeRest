import mongoose from 'mongoose'

const { Schema } = mongoose

const locationSchema = new Schema({
   post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
   },
   map: {
      lng: String,
      lat: String
   },
})

const Location = mongoose.model('Location', locationSchema)

export default Location