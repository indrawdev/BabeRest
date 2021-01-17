import Post from '../models/post.js'
import User from '../models/user.js'
import Post from '../models/post'

export const getUsers = async (req, res, next) => { 

	try {
	
		const users = await User.find().exec()

		res.status(200).json({ data: users })
		
		next()

	} catch (error) {
		
		res.status(500).json({ message: error })
		
		next()

	}

}

export const getUserById = async (req, res, next) => {

	const userId = req.params.uid

	try {

		const user = await User.findById(userId).populate(Post).exec()

		res.status(200).json({ data: user })
	
		next()
		
	} catch (error) {
		
		res.status(500).json({ message: error })
		
		next()
		
	}

}

