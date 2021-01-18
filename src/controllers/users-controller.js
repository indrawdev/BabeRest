import Post from '../models/post.js'
import User from '../models/user.js'

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

export const updateProfile = async (req, res, next) => {

	const userId = req.params.uid

	const { name, gender, dob, avatar, bio } = JSON.parse(JSON.stringify(req.body))

	await User.findByIdAndUpdate(userId, {
		$set: {
			name: name,
			gender: gender,
			dob: dob,
			avatar: avatar,
			bio: bio
		}
	}, options, callback).exec()

	res.status(200).json({ message: 'OK' })
	
	next()

}

export const deleteUser = async (req, res, next) => {

	const userId = req.params.uid

	await User.findByIdAndDelete(userId, callback).exec()

	res.status(200).json({ message: 'OK' })

	next()

}
