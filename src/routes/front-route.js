import express from 'express'
import {
	frontend, kosts, apartments, getKostBySlug
} from '../controllers/fronts-controller.js'

const frontRouter = express.Router()

frontRouter.get('/', frontend)
frontRouter.get('/kosts', kosts)
frontRouter.get('/apartments', apartments)
frontRouter.get('/p/:slug', getKostBySlug)

export default frontRouter