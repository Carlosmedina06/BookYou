import Book from '../../models/Book.js'
const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({ available: { $eq: true } }).populate('user', { username: 1 })

    res.status(200).json(allBooks)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export default getAllBooks
