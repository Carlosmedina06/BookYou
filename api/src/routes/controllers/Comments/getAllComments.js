import Comment from '../../../models/Comment.js'

const getAllComments = async (req, res) => {
  try {
    const allComents = await Comment.find()

    res.status(200).json(allComents)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export default getAllComments
