import validator from 'express-validator'
import Post from '../models/post.js'
import User from '../models/user.js'
import Photo from '../models/photo.js'

const { validationResult } = validator

export const getPostById = async (req, res, next) => {

	const postId = req.params.pid

	try {

		const post = await Post.findById(postId).populate('user').exec()

		res.status(200).json({ data: post })

		next()

	} catch (error) {

		res.status(500).json({ message: error })

		next()

	}

}

export const createPost = async (req, res, next) => {

	const errors = validationResult(req)

	if (!errors.isEmpty()) {

		return res.status(400).json({ errors: errors.array() })

	}

	const { type, title, slug, user } = JSON.parse(JSON.stringify(req.body))

	try {

		const newPost = await Post.create({
			type: type,
			title: title,
			slug: slug,
			user: user
		})

		newPost.save().then(post => {
			User.update({ _id: user }, { $push: { posts: post._id } }, (err) => {

				if (err) {
					res.status(400).json({ error: err })
					next()
				} else {
					res.status(201).json({ data: post })
					next()
				}

			})
		})

	} catch (error) {
		res.status(500).json({ message: error })
		next()
	}

}

export const updatePost = async (req, res, next) => {

	const postId = req.params.pid

	const { type, title, location } = JSON.stringify(req.body)

	try {

		const post = await Post.updateOne({ _id: postId }, {
			$set: {
				type: type,
				title: title,
				location: location
			}
		})

		res.status(200).json({ data: post })

		next()

	} catch (error) {

		res.status(500).json({ message: error })

		next()

	}

}

export const deletePost = async (req, res, next) => {

	const postId = req.params.pid

	try {

		const post = await Post.deleteOne({ _id: postId }).exec()

		res.status(200).json({ data: post })

		next()

	} catch (error) {

		res.status(500).json({ message: error })

		next()

	}

}

export const uploadPhoto = async (req, res, next) => {

	const form = new FormData()

	form.append('filename', '')

	form.append('post', '')

	try {

		const photo = await Photo.create({
			filename: '',
			user: ''
		}).exec()

		res.status(201).json({ data: photo })

		next()

	} catch (error) {

		res.status(500).json({ message: error })

		next()

	}

}

export const deletePhoto = async (req, res, next) => {

	const photoId = req.params.ppid

	try {

		const photo = await Photo.deleteOne({ _id: photoId }).exec()

		res.status(200).json({ data: photo })

		next()

	} catch (error) {

		res.status(500).json({ message: error })

		next()

	}

}