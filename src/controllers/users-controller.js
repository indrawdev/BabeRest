import User from '../models/user.js'
import Post from '../models/post.js'

export const getUserById = async (req, res, next) => {

   const userId = req.params.uid
   
   const user = await User.findById(userId)

   res.status(200).json({ data: user })

   next()
}

export const getUserByPost = async (req, res, next) => { 

   const postId = req.params.pid
   
   const user = await Post.findById(postId).populate('user')

   res.status(200).json({ data: user })

   next()
}

export const getUserByReview = async (req, res, next) => { 

   const reviewId = req.params.rid
   
   const user = await Review.findById(reviewId).populate('user')

   res.status(200).json({ data: user })

   next()
}