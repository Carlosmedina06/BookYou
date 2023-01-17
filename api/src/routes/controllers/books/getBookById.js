import Book from '../../../models/Book.js'
const getBookById = async (req, res, next) => {
  try {
    const { id } = req.params
    const oneBook = await Book.findById(id)

    res.status(200).json(oneBook)
  } catch (error) {
    next(error)
  }
}

export default getBookById
