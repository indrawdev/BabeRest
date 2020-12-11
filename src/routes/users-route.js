import express from 'express'

import {
   getUserById, getUserByReview, getUserByPost
} from '../controllers/users-controller.js'

const userRouter = express.Router()

userRouter.get('user/:uid', getUserById)
userRouter.get('user/:pid', getUserByPost)
userRouter.get('user/:rid', getUserByReview)

export default userRouter