import Book from '../../../models/Book.js'
const bookUpdate = async (req, res, next) => {
  try {
    const { id } = req.params
    const { content, description, title, img } = req.body

    await Book.findByIdAndUpdate(id, { content, description, title, img })

    res.status(200).json(`book ${id} modified succesful`)
  } catch (error) {
    next(error)
  }
}

export default bookUpdate
