import jwt from 'jsonwebtoken'

import Book from '../../models/Book.js'
import Comment from '../../models/Comment.js'
import User from '../../models/User.js'
import { SendMailnewComment } from '../../emailer/emailer.js'

const createCommentBook = async (req, res) => {
  try {
    const { comment, id, rate } = req.body

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

      if (!comment) res.status(400).send('comment content is required')

      const book = await Book.findById(id).populate(['user'])
      const newComment = new Comment({
        comment,
        book: book._id,
        user: user._id,
        rate,
        username: user.name,
      })

      await newComment.save()
      book.comment = book.comment.concat(newComment._id)
      user.comment = user.comment.concat(newComment._id)
      await user.save()
      await book.save()

      SendMailnewComment(book, newComment)
      res.status(200).send('Created book comment')
    }
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export default createCommentBook
