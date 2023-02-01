import Comment from '../../models/Comment.js'
const getCommentsUser = async (req, res) => {
  const { number } = req.params
  const comments = await Comment.find({ report: { $gte: number } })

  res.status(200).json(comments)
}

export default getCommentsUser
