import jwt from 'jsonwebtoken'

import User from '../../models/User.js'

const getFavorite = async (req, res) => {
  try {
    const authorization = req.get('authorization')

    if (authorization.length <= 7 || !authorization) {
      res.status(401).json('token missing')
    }
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.SECRET)

      const user = await User.findById(decodedToken.id)

      await user.populate('favorites')
      res.status(200).json(user.favorites)
    }
  } catch (error) {
    res.json(error.message)
  }
}

export default getFavorite
