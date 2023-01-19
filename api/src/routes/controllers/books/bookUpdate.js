import jwt from 'jsonwebtoken'

import Book from '../../../models/Book.js'

const bookUpdate = async (req, res, next) => {
  try {
    const { id } = req.params
    const authorization = req.get('authorization')
    const { content, description, title, img } = req.body

    if (authorization.length <= 7) {
      res.status(401).json('token missing')
    }
    if (!content || !description || !title || !img) {
      res.status(400).json('Campos incompletos')
    }
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.SECRET)

      if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
      }
      const modifiedBook = await Book.findById(id)

      if (modifiedBook.user.id === decodedToken.id) {
        modifiedBook.title = title
        modifiedBook.content = content
        modifiedBook.description = description
        modifiedBook.img = img
        res.status(200).json(`El libro fue modificado con éxito`)
      } else {
        res.status(401).json('Acción no permitida')
      }
    }
  } catch (error) {
    next(error)
  }
}

export default bookUpdate
