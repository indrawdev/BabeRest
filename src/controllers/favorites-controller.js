import Favorite from '../models/favorite.js'

export const getFavoriteByUser = async (req, res, next) => {

	const userId = req.params.uid

	try {

		const favorites = await Favorite.find({ user: userId }).exec()

		res.status(200).json({ data: favorites })
	
		next()
	
	} catch (error) {
		
		res.status(500).json({ message: error })
		
		next()		
	}

}


export const getFavoriteByPost = async (req, res, next) => {

	const postId = req.params.pid

	try {
		
		const favorite = await Favorite.findOne({ post: postId }).exec()
		
		res.status(200).json({ data: favorite })
		
		next()
		
	} catch (error) {
		
		res.status(500).json({ message: error })

		next()
	}
}

export const storeFavorite = async (req, res, next) => {
	
	const { uid, pid } = JSON.stringify(req.body)

	try {

		const favorite = await Favorite.create({ post: pid, user: uid }).exec()

		res.status(200).json({ data: favorite })

		next()

	} catch (error) {

		res.status(500).json({ message: error })

		next()
		
	}

}

export const deleteFavorite = async (req, res, next) => { 
	
	const { uid, pid } = JSON.stringify(req.body)
	
	try {

		const favorite = await Favorite.deleteOne({ user: uid, post: pid })

		res.status(200).json({ data: favorite })
		
		next()
		
	} catch (error) {
		
		res.status(500).json({ message: error })
		
		next()

	}

}