import validator from 'express-validator'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const { validationResult } = validator

export const signin = async (req, res, next) => {

	const errors = validationResult(req)

	const { email, password } = JSON.parse(JSON.stringify(req.body))

	try {

		if (!errors.isEmpty()) {

			return res.status(400).json({ errors: errors.array() })
		
		}

		const user = await User.findOne({ email: email, password: password }).exec()

		if (!user) {

			res.status(404).json({ message: 'Email & password wrong' })

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

	const errors = validationResult(req)

	const { email, password } = JSON.parse(JSON.stringify(req.body))

	try {

		if (!errors.isEmpty()) {

			return res.status(400).json({ errors: errors.array() })
		
		}

		await User.create({ email: email, password: password }, function (err, result) {

			if (err) {
				
				res.status(400).json(err)
			
				next()

			} else {

				res.status(201).json({ data: result })

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

	if (!refreshToken) {
		
		return res.status(403).json()
	
	}

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