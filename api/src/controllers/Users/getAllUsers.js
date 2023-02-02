import User from '../../models/User.js'

const getAllUsers = async (req, res) => {
  const { status } = req.query

  try {
    if (status) {
      const users = await User.find({ available: { $eq: status } }).populate('books', {
        title: 1,
        description: 1,
        img: 1,
        content: 1,
        subcription: 1,
        comment: 1,
        createdAt: 1,
      })

      res.status(200).json(users)
    } else {
      const users = await User.find().populate('books', {
        title: 1,
        description: 1,
        img: 1,
        content: 1,
        subcription: 1,
        comment: 1,
        createdAt: 1,
      })

      res.status(200).json(users)
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export default getAllUsers
