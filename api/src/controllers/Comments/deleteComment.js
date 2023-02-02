import jwt from 'jsonwebtoken'

import Comment from '../../models/Comment.js'

const deleteComment = async (req, res, next) => {
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
      const selectComment = await Comment.findById(id)

      if (
        decodedToken.id.toString() === selectComment.user.toString() ||
        decodedToken.role === 'admin'
      ) {
        selectComment.available = false
        selectComment.save()
      } else {
        res.status(401).json('Unauthorized')
      }
      res.status(200).json(`el comentario ${selectComment.comment} fue eliminado con exito`)
    }
  } catch (error) {
    next(error)
  }
}

export default deleteComment
