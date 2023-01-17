import moongose from 'mongoose'

const UserSchema = new moongose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subscription: {
    type: String,
    enum: ['free', 'bronce', 'silver', 'gold'],
    default: 'free',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  books: [],
})

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const newUser = moongose.model('User', UserSchema)

export default newUser
