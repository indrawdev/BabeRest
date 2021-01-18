import express from 'express'
import validator from 'express-validator'
import {
	getFavoriteByPost,
	getFavoriteByUser,
	createFavorite,
	deleteFavorite
} from '../controllers/favorites-controller.js'
import { auth } from '../middlewares/auth.js'

const favoriteRoute = express.Router()
const { body } = validator

favoriteRoute.get('/favorites/post/:pid', getFavoriteByPost)
favoriteRoute.get('/favorites/user/:uid', getFavoriteByUser)
favoriteRoute.post('/favorite',
	body('pid').not().isEmpty(),
	body('uid').not().isEmpty(), createFavorite)
favoriteRoute.delete('/favorite/:fid', auth, deleteFavorite)

export default favoriteRoute