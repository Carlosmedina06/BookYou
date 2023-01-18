import Comment from '../../../models/Comment.js'
const CreateCommentUser = async (req, res) => {
  try {
    const { comment, user } = req.body

    if (!comment || !user) res.status(400).send('comment and user is required')

    const newComment = new Comment({ comment, user })

    await newComment.save()

    res.status(200).send('Created user comment')
  } catch (error) {
    res.status(404).send(error.message)
  }
}

export default CreateCommentUser
