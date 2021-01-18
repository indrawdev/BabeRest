import express from 'express'
import validator from 'express-validator'
import {
	getArticles, getArticleById,
	createArticle, updateArticle, deleteArticle
} from '../controllers/articles-controller.js'

const articleRouter = express.Router()
const { body } = validator

articleRouter.get('/articles', getArticles)
articleRouter.get('/article/:pid', getArticleById)
articleRouter.post('/article', createArticle)
articleRouter.put('/article/:pid', updateArticle)
articleRouter.delete('/article/:pid', deleteArticle)

export default articleRouter