import jwt from 'jsonwebtoken'

import Book from '../../../models/Book.js'
import User from '../../../models/User.js'

const bookPost = async (req, res) => {
  try {
    const { content, description, title, img } = req.body
    const authorization = req.get('authorization')

    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.SECRET)

      if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
      }

      const user = await User.findById(decodedToken.id)

      if (!description || !title) res.status(400).send('Missing Submit Properties')

      const book = new Book({
        title,
        content: content || '', // content not define yet
        description,
        img: img || 'https://www.esstudioediciones.com/blog/escribir-libro-editorial-publicar.jpg',
        user: user._id,
        comments: [],
      })

      await book.save()
      user.books = user.books.concat(book._id)
      await user.save()

      res.status(200).json(book)
    }
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export default bookPost
