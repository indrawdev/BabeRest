import Post from '../models/post.js'

export const frontend = async (req, res, next) => {

	try {

		res.status(200).json({ message: 'Alright' })

		next()

	} catch (error) {

		res.status(500).json({ message: error })

		next()

	}
}

export const kosts = async (req, res, next) => {

	const filter = JSON.parse(JSON.stringify(req.body))

	try {

		res.status(200).json({ message: 'Alright' })

		next()

	} catch (error) {

		res.status(500).json({ message: error })

		next()

	}

}

export const apartments = async (req, res, next) => {

	const filter = JSON.parse(JSON.stringify(req.body))

	try {

		res.status(200).json({ message: 'Alright' })

		next()

	} catch (error) {

		res.status(500).json({ message: error })

		next()

	}
}

export const getKostBySlug = async (req, res, next) => {

	const slug = req.params.slug
	const filter = JSON.parse(JSON.stringify(req.body))

	try {

		const post = await Post.findOne({ slug: slug }).populate('user').exec()

		if (!post) {

			return res.status(404).json({ data: 'Not found' })

		}

		res.status(200).json({ data: post })

		next()

	} catch (error) {

		res.status(500).json({ message: error })

		next()

	}

}