import User from '../models/user.js'

export const signin = async (req, res, next) => { 

   const { email, password } = req.body

   const user = await User.findOne({ email: email, password: password })

   if (user) {
      res.status(200).json({ data: user })
   }

   next()
}

export const signup = async (req, res, next) => { 

   const { email, password } = req.body

   const user = await User.insert({ email: email, password: password })

   res.status(201).json({ data: user })

   next()
}

export const me = async (req, res, next) => { 
   
   await User.findOne({})

}