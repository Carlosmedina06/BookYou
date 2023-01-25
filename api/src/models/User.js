import moongose from 'mongoose'

const UserSchema = new moongose.Schema({
  name: String,
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  img: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subscription: {
    type: String,
    enum: ['free', 'premium'],
    default: 'free',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  available: {
    type: Boolean,
    default: true,
  },
  books: [
    {
      type: moongose.Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
  comment: [
    {
      type: moongose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
})

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.password
  },
})

const User = moongose.model('User', UserSchema)

export default User
