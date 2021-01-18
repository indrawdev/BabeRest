import Booking from '../models/booking.js'
import User from '../models/user.js'

export const getBookingByUser = async (req, res, next) => {

	const userId = req.params.uid

	const bookings = await User.find(userId).exec()

	res.status(200).json({ data: bookings })

	next()
}

export const getBookingByPost = async (req, res, next) => {
	const postId = req.params.pid
}

export const createBooking = async (req, res, next) => {

	const { pid, uid } = JSON.parse(JSON.stringify(req.body))

	try {
		
		const booking = await Booking.create({
			'post': pid,
			'user': uid
		}).exec()
	
		res.status(201).json({ data: booking })

		next()
		
	} catch (error) {
		
		res.status(500).json({ message: error })
		
		next()

	}

}

export const deleteBooking = async (req, res, next) => { 
	
	const bookingId = req.params.bid

	try {

		const booking = await Booking.findByIdAndDelete(bookingId).exec()
	
		res.status(200).json({ data: booking })
		
		next()
			
	} catch (error) {

		res.status(500).json({ message: error })
		
		next()
		
	}

}