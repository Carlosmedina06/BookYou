import User from '../../models/User.js'
import Book from '../../models/Book.js'

const getUserById = async (req, res) => {
  const { id } = req.params

  const user = await User.findById(id).populate('comment').populate('favorites')
  const books = await Book.find({ user: { $eq: id } }).populate('comment')

  user.books = books

  if (user) {
    res.status(200).json(user)
  } else {
    res.status(404).json({ message: `User not found` })
  }
}

export default getUserById
