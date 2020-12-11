import mongoose from 'mongoose'

const { Schema } = mongoose

const bookingSchema = new Schema({
   post: {
      type: Schema.Types.ObjectId,
      ref: 'Post'
   },
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   }
}, {
   timestamps: true,
   autoCreate: true
})

const Booking = mongoose.model('Booking', bookingSchema)

export default Booking