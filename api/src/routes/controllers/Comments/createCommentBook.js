import Comment from '../../../models/Comment.js'

const createCommentBook = async (req, res) => {
  try {
    const { comment, book } = req.body

    if (!comment || !book) res.status(400).send('comment and book is required')

    const newComment = new Comment({ comment, book })

    await newComment.save()

    res.status(200).send('Created book comment')
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export default createCommentBook
