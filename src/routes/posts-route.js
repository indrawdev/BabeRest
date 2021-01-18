import express from 'express'
import validator from 'express-validator'
import {
	getPostById,
	createPost,
	updatePost,
	deletePost
} from '../controllers/posts-controller.js'
import { auth } from '../middlewares/auth.js'

const postRouter = express.Router()
const { body } = validator

postRouter.get('/post/:pid', auth, getPostById)
postRouter.post('/post', createPost)
postRouter.put('/post/:pid', updatePost)
postRouter.delete('/post/:pid', deletePost)

export default postRouter