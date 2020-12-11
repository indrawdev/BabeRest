import express from 'express'

import {
   getReviewById, getReviewByUser, getReviewByPost
} from '../controllers/reviews-controller.js'

const reviewRoute = express.Router()

reviewRoute.get('review/:rid', getReviewById)
reviewRoute.get('review/:uid', getReviewByUser)
reviewRoute.get('review/:pid', getReviewByPost)

export default reviewRoute