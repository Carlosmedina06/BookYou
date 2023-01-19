import jwt from 'jsonwebtoken'

import Comment from '../../../models/Comment.js'
import User from '../../../models/User.js'

const updateComment = async (req, res, next) => {
  try {
    const { id } = req.params
    const { comment } = req.body
    const targetComment = await Comment.findById(id)
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
      const user = await User.findById(decodedToken.id)

      if (user.id.toString() === targetComment.user.toString()) {
        targetComment.comment = comment
        targetComment.save()
        res.status(200).json('comentario actualizado ')
      } else {
        res.status(400).json('no tienes permisos')
      }
    }

    // const targetComment = await Comment.findByIdAndUpdate(id, { comment }
  } catch (error) {
    next(error)
  }
}

export default updateComment
