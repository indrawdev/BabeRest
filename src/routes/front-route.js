import express from 'express'
import {
	frontend
} from '../controllers/auth-controller.js'

const frontRouter = express.Router()

frontRouter.get('/', frontend)

export default frontRouter