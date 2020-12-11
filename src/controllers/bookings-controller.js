import Booking from '../models/booking.js'
import User from '../models/user.js'

export const getBookingById = async (req, res, next) => { 
   
   const bookingId = req.params.bid

   const booking = await Booking.findById(bookingId)
   
   res.status(200).json({ data: booking })

   next()
}

export const getBookingByUser = async (req, res, next) => { 

   const userId = req.params.uid

   const bookings = await User.find(userId)

   res.status(200).json({ data: bookings })

   next()
}

export const getBookingByPost = async (req, res, next) => { 

}