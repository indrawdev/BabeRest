import jwt from 'jsonwebtoken'

export const auth = async (req, res, next) => {

	if (typeof req.headers.authorization !== 'undefined') {

		const accessToken = req.headers.authorization.split(" ")[1]
		
		try {

			await jwt.verify(accessToken, 'onlymeknow', (err) => {

				if (err) {  
					
					return res.status(500).json({ error: 'Not Authorized' })
				
				}
				
				return next()
			
			})

		} catch (err) {

			return res.status(500).json({ error: err })
		
		}
	
	} else {
		
		return res.status(404).json({ message: 'Could not find token' })
	
	}

}