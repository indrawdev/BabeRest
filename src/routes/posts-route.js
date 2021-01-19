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
postRouter.post('/post',
	body('type').not().isEmpty(),
	body('title').isLength({ min: 5 }).not().isEmpty(),
	body('user').not().isEmpty(), createPost)
postRouter.put('/post/:pid',
	body('title').isLength({ min: 5 }).not().isEmpty(), updatePost)
postRouter.delete('/post/:pid', deletePost)

export default postRouter