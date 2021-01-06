import express from 'express'

import {
	getBookingById, getBookingByUser, getBookingByPost
} from '../controllers/bookings-controller.js'

const bookingRoute = express.Router()

bookingRoute.get('booking/:bid', getBookingById)
bookingRoute.get('booking/:uid', getBookingByUser)
bookingRoute.get('booking/:pid', getBookingByPost)

export default bookingRoute