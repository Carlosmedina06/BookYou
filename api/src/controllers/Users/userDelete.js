import jwt from 'jsonwebtoken'

import User from '../../models/User.js'
import Comment from '../../models/Comment.js'
import Book from '../../models/Book.js'

const userDelete = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) res.status(400).json('ID required')

    const authorization = req.get('authorization')

    if (authorization.length <= 7) {
      res.status(401).json('token missing')
    }
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.SECRET)

      if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
      }

      if (decodedToken.role === 'admin' || decodedToken.id.toString() === id) {
        const user = await User.findById(id)

        await Comment.updateMany({ user: id }, { available: false })
        await Book.updateMany({ user: id }, { available: false })

        user.available = false
        user.save()
        res.status(200).json(`El usuario ${user.username} fue eliminado`)
      }

      return res.status(401).json({ error: 'only admin can delete users' })
    }
  } catch (error) {
    next(error)
  }
}

export default userDelete
