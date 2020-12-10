import User from '../models/user'

export const getUserById = async (req, res, next) => {
   const uid = req.params.pid
   
   const user = await User.findById(uid)

   res.status(200).json({
      data: user
   })
}