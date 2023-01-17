import moongose from 'mongoose'

const BookSchema = new moongose.Schema({
  title: String,
  description: String,
  img: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subscription: {
    type: String,
    enum: ['free', 'bronce', 'silver', 'gold'],
    default: 'free',
  },
  user: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'User',
  },
  comment: [
    {
      type: moongose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

BookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const newBook = moongose.model('Book', BookSchema)

export default newBook
