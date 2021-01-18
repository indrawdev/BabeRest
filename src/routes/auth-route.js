import express from 'express'
import validator from 'express-validator'
import {
	frontend, signin,
	signup, refreshToken,
	forgotPass
} from '../controllers/auth-controller.js'
import { auth } from '../middlewares/auth.js'

const authRouter = express.Router()
const { body } = validator

authRouter.get('/', auth, frontend)
authRouter.post('/signin',
	body('email').isEmail().normalizeEmail(),
	body('password').isLength({ min: 6 }), signin)
authRouter.post('/signup',
	body('email').isEmail().normalizeEmail(),
	body('password').isLength({ min: 6 }), signup)
authRouter.get('/refresh-token', auth, refreshToken)
authRouter.post('/forgot-password',
	body('email').isEmail().normalizeEmail(), forgotPass)
	
export default authRouter