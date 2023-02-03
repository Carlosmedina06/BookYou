import jwt from 'jsonwebtoken'

import User from '../../models/User.js'

const addFavorite = async (req, res) => {
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
      const VerifiedIfYouAreInFaviritos = user.favorites.find((e) => e.toString() === id.toString())

      if (VerifiedIfYouAreInFaviritos) {
        return res.status(200).json('The book is already added to favorites')
      } else {
        user.favorites = [...user.favorites, id]
        await user.save()
      }
      res.status(200).json('too ok')
    }
  } catch (error) {
    res.json(error.message)
  }
}

export default addFavorite
