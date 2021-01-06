import User from '../models/user.js'
import jwt from 'jsonwebtoken'

export const signin = async (req, res, next) => {

	const { email, password } = JSON.parse(req.body)

	try {

		const user = await User.findOne({ email: email, password: password }).exec()

		if (user) {

			let payload = user

			let accessToken = jwt.sign(payload, 'onlymeknow', { expiresIn: '1d' })
			
			res.status(200).json({ token: accessToken, data: user })
			
			next()

		}

		res.status(404).json({ message: 'Not found' })
			
		next()
	
	} catch (error) {
		
		res.status(500).json({ message: error })
		
		next()
	
	}

}

export const signup = async (req, res, next) => {

	const { email, password } = JSON.parse(req.body)

	try {

		const user = await User.insert({ email: email, password: password }).exec()
		
		res.status(201).json({ data: user })
		
		next()
	
	} catch (error) {
		
		res.status(500).json({ message: error })
		
		next()
	
	}

}

export const refreshToken = async (req, res, next) => { 

}

export const forgotPass = async (req, res, next) => { 

}