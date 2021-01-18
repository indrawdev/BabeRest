import express from 'express'
import validator from 'express-validator'
import {
	getBookingByUser,
	getBookingByPost,
	createBooking,
	deleteBooking
} from '../controllers/bookings-controller.js'
import { auth } from '../middlewares/auth.js'

const bookingRoute = express.Router()
const { body } = validator

bookingRoute.get('bookings/user/:uid', getBookingByUser)
bookingRoute.get('bookings/post/:pid', getBookingByPost)
bookingRoute.post('booking',
	body('pid').not().isEmpty(),
	body('uid').not().isEmpty(), createBooking)
bookingRoute.delete('booking/:bid', deleteBooking)

export default bookingRoute