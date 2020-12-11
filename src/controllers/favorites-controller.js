import Favorite from '../models/favorite.js'

export const getFavoriteByUser = async (req, res, next) => { 

   const userId = req.params.uid

   const favorites = await Favorite.find()

   res.status(200).json({ data: favorites })

   next()
}


export const getFavoriteByPost = async (req, res, next) => { 
   
   const postId = req.params.pid

   const favorites = await Favorite.find()

   res.status(200).json({ data: favorites })

   next()
}