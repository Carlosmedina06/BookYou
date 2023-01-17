import Book from '../../../models/Book.js'

const bookDelete = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) res.status(200).json('ID required')
    await Book.findByIdAndDelete(id)
    res.status(200).json(`The workbook with the ID ${id} was deleted`)
  } catch (error) {
    next(error)
  }
}

export default bookDelete
