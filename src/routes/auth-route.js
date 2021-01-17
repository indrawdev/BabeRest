import express from 'express'

import { frontend, signin, signup, refreshToken, forgotPass } from '../controllers/auth-controller.js'

const authRouter = express.Router()

authRouter.get('/', frontend)
authRouter.post('/signin', signin)
authRouter.post('/signup', signup)
authRouter.get('/refresh-token', refreshToken)
authRouter.post('/forgot-password', forgotPass)

export default authRouter