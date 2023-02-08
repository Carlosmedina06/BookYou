import jwt from 'jsonwebtoken'

import Comment from '../../models/Comment.js'

const updateComment = async (req, res, next) => {
  try {
    const { id } = req.params

    const { report } = req.body
    const targetComment = await Comment.findOne({ _id: id })

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

      if (decodedToken.role === 'admin') {
        targetComment.report = report
        targetComment.save()
        res.status(200).json('comentario actualizado ')
      } else {
        res.status(400).json('no tienes permisos')
      }
    }
  } catch (error) {
    next(error)
  }
}

export default updateComment
