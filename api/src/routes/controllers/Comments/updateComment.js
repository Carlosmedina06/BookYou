import Comment from '../../../models/Comment.js'
const updateComment = async (req, res, next) => {
  try {
    const { id } = req.params
    const { comment } = req.body

    await Comment.findByIdAndUpdate(id, { comment })
    res.status(200).json('comentario actualizado')
  } catch (error) {
    next(error)
  }
}

export default updateComment
