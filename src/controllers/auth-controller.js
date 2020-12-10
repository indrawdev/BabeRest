import User from '../models/user'

export const signin = async (req, res, next) => { 

   const { email, password } = req.body

   const user = await User.findOne({
      email: email,
      password: password
   })

   res.status(200).json({ data: user })

   next()
}

export const me = async (req, res, next) => { 
   await User.findOne({})
}