import jwt from 'jsonwebtoken'

import Book from '../../../models/Book.js'
import Comment from '../../../models/Comment.js'

const bookDelete = async (req, res, next) => {
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
      const book = await Book.findById(id)

      if (book.user.toString() === decodedToken.id.toString()) {
        await Comment.deleteMany({ _id: { $in: book.comment } })

        const deletedBook = await Book.findByIdAndDelete(id)

        res.status(200).json(`The workbook  ${deletedBook.title} was deleted`)
      } else {
        res.status(401).json('Unauthorized')
      }
    }
  } catch (error) {
    next(error)
  }
}

export default bookDelete
