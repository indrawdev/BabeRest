import express from 'express'

import { getPostById, getPostByUser } from '../controllers/posts-controller.js'

const postRouter = express.Router()

postRouter.get('post/:pid', getPostById)
postRouter.get('post/:uid', getPostByUser)

export default postRouter