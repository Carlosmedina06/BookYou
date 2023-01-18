import Comment from '../../../models/Comment'
const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params
    const selectComment = await Comment.findByIdAndDelete(id)

    res.status(200).json(`el comentario ${selectComment.comment} fue eliminado con éxito`)
  } catch (error) {
    next(error)
  }
}

export default deleteComment
