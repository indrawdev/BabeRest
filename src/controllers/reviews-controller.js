import Review from '../models/review.js'
import User from '../models/user.js'

export const getReviewById = async (req, res, next) => { 
   
   const reviewId = req.params.rid
   
   const review = await Review.findById(reviewId)
   
   res.status(200).json({ data: review })

   next()
}

export const getReviewByUser = async (req, res, next) => { 

   const userId = req.params.uid

   const reviews = await User.findById(userId)

   res.status(200).json({ data: reviews })

   next()
}

export const getReviewByPost = async (req, res, next) => { 

   const postId = req.params.pid

   next()
}