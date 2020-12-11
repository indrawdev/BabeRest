import Post from '../models/post.js'

export const getPostById = async (req, res, next) => { 
   
   const postId = req.params.pid

   const post = await Post.findById(postId).populate('user')

   res.status(200).json({ data: post })

   next()
}

export const getPostByUser = async (req, res, next) => { 

   const userId = req.params.uid

   const posts = await Post.find()

   res.status(200).json({ data: posts })

   next()
}