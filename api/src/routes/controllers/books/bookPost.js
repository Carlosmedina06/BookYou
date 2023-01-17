import Book from '../../../models/Book.js'

const bookPost = async (req, res) => {
  try {
    const { content, description, title, img } = req.body

    if (!content || !description || !title) res.status(400).send('Missing Submit Properties')

    const book = new Book({
      title,
      content,
      description,
      img: img || 'https://www.esstudioediciones.com/blog/escribir-libro-editorial-publicar.jpg',
    })

    await book.save()

    res.status(200).json(book)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export default bookPost
