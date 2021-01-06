import express from 'express'

import {
	getFavoriteByPost, getFavoriteByUser
} from '../controllers/favorites-controller'

const favoriteRoute = express.Router()

favoriteRoute.get('favorite/:pid', getFavoriteByPost)
favoriteRoute.get('favorite/:uid', getFavoriteByUser)

export default favoriteRoute
