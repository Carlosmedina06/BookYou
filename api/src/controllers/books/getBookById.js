import Book from '../../models/Book.js'

const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params

    const oneBook = await Book.findById(id).populate('Comment')

    await oneBook.populate('user', { username: 2 })

    res.status(200).json(oneBook)
  } catch (error) {
    next(error)
  }
}

export default getBookById
