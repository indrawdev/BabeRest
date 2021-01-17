import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

const port = 3000
const app = express()

import authRouter from './src/routes/auth-route.js'

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(authRouter)

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