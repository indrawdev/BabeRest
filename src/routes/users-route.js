import express from 'express'
import validator from 'express-validator'
import { getUserById, updateUser, deleteUser } from '../controllers/users-controller.js'

import { auth } from '../middlewares/auth.js'

const userRouter = express.Router()
const { body } = validator

userRouter.get('user/:uid', auth, getUserById)
userRouter.put('user/:uid', auth, updateUser)
userRouter.delete('user/:uid', auth, deleteUser)

export default userRouter