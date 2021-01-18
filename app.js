import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const port = 3000
const app = express()

import frontRouter from './src/routes/front-route.js'
import authRouter from './src/routes/auth-route.js'
import postRouter from './src/routes/posts-route.js'
import bookingRouter from './src/routes/bookings-route.js'
import favoriteRouter from './src/routes/favorites-route.js'

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(frontRouter)
app.use(authRouter)
app.use(postRouter)
app.use(bookingRouter)
app.use(favoriteRouter)

mongoose.connect('mongodb://localhost:27017/babe')
	.then(result => {
		app.listen(port, () => {
			console.log(`Server is running on port | ${port}.`)
		})
	})
	.catch(err => {
		console.log(err)
	})

mongoose.set('debug', true)