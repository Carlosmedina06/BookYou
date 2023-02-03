import jwt from 'jsonwebtoken'

import User from '../../models/User.js'

const deleteFavorite = async (req, res) => {
  try {
    const authorization = req.get('authorization')
    const { id } = req.params

    if (authorization.length <= 7 || !authorization) {
      res.status(401).json('token missing')
    }
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.SECRET)

      const user = await User.findById(decodedToken.id)

      user.favorites = user.favorites.filter((e) => e.toString() !== id.toString())
      await user.save()
      res.status(200).json(`The workbook with ID ${id} has been removed from favorites`)
    }
  } catch (error) {
    res.json(error.message)
  }
}

export default deleteFavorite
