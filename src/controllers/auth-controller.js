import User from '../models/user.js'
import jwt from 'jsonwebtoken'

export const frontend = async (req, res, next) => {

	res.status(200).json({ message: 'Alright' })

	next()

}

export const signin = async (req, res, next) => {

	const { email, password } = JSON.parse(JSON.stringify(req.body))

	try {

		const user = await User.findOne({ email: email, password: password }).exec()

		if (!user) {

			res.status(404).json({ message: 'Not found' })

			next()

		} else {

			const accessToken = jwt.sign({ user }, 'onlymeknow', { expiresIn: '1d' })
			
			res.status(200).json({ token: accessToken, data: user })

			next()
		}

	} catch (error) {

		res.status(500).json({ message: error })

		next()

	}

}

export const signup = async (req, res, next) => {

	const { email, password } = JSON.parse(JSON.stringify(req.body))

	try {

		await User.create({ email: email, password: password }, function (err) {
			if (err) {
				
				res.status(400).json({ message: err })
			
				next()

			} else {
				res.status(201).json({ data: 'OK' })

				next()
			}
		})

	} catch (error) {

		res.status(500).json({ message: error })

		next()

	}

}

export const refreshToken = async (req, res, next) => {

	const refreshToken = req.headers.authorization.split(" ")[1]

}

export const forgotPass = async (req, res, next) => {

	const { email } = JSON.parse(JSON.stringify(req.body))

	try {
		
		const user = await User.findOne({ email: email }).exec()
		
		if (!user) {

		} else {

		}

	} catch (error) {
		
	}
}