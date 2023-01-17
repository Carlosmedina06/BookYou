import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
})

CommentSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Comment = mongoose.model('Comment', CommentSchema)

export default Comment
