// import jwt from 'jsonwebtoken'

import Book from '../../models/Book.js'
// import User from '../../models/User.js'
import cloudinary from '../../utils/Cloudinary.js'

const bookPost = async (req, res) => {
  try {
    const { description, title, img, subscription, category, author } = req.body

    if (!req.files) return res.status(400).json('content missing')
    const file = await cloudinary(req.files.content.tempFilePath)

    // const authorization = req.get('authorization')

    // if (authorization.length <= 7) {
    //   res.status(401).json('token missing')
    // }
    // if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    //   const token = authorization.substring(7)
    //   const decodedToken = jwt.verify(token, process.env.SECRET)

    // if (!token || !decodedToken.id) {
    //   return res.status(401).json({ error: 'token missing or invalid' })
    // }
    // const user = await User.findById(decodedToken.id)

    if (!description || !title) return res.status(400).json('Missing Submit Properties')
    const book = new Book({
      title,
      description,
      content: file.secure_url || '',
      img: img || 'https://www.esstudioediciones.com/blog/escribir-libro-editorial-publicar.jpg',
      author: author || 'Anónimo',
      // user: user._id,
      subscription: subscription || 'free',
      category: category || 'Arte',
      comments: [],
    })

    await book.save()
    // user.books = user.books.concat(book._id)
    // await user.save()
    res.status(200).json(book)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export default bookPost
