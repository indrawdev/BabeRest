import Article from '../models/article.js'

export const getArticles = async (req, res, next) => { 

	try {
		
		const articles = await Article.find().exec()

		res.status(200).json({ data: articles })
		
		next()

	} catch (error) {
		
		res.status(500).json({ message: error })
		
		next()

	}

}

export const getArticleById = async (req, res, next) => { 
	
}

export const createArticle = async (req, res, next) => { 
	
	const { title, body } = JSON.parse(JSON.stringify(req.body))

	try {

		const article = await Article.create({
			'title': title,
			'body': body
		}).exec()

		res.status(201).json({ data: article })
		
		next()

	} catch (error) {
		
		res.status(500).json({ message: error })
		
		next()
		
	}

}

export const updateArticle = async (req, res, next) => { 

	const { title, body } = JSON.parse(JSON.stringify(req.body))

	const article = await Article.updateOne({}).exec()

	
}

export const deleteArticle = async (req, res, next) => {

}