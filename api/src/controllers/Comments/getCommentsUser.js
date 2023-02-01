import Comment from '../../models/Comment.js'
const getCommentsUser = async (req, res) => {
  const comments = await Comment.find({ report: { $gte: 1 } })

  res.status(200).json(comments)
}

export default getCommentsUser
