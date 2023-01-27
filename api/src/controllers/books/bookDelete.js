import jwt from 'jsonwebtoken'

import Book from '../../models/Book.js'
// import Comment from '../../models/Comment.js'

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

      if (decodedToken.id.toString() !== book.user.toString()) {
        res.status(401).json('Unauthorized papu')
      } else {
        book.available = false
        book.save()
        res.status(200).json('Book deleted')
      }
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export default bookDelete
