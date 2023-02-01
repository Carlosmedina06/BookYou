import mongoose from 'mongoose'

const TicketSchecma = new mongoose.Schema({
  subject: String,
  content: String,
  resolve: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

TicketSchecma.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Ticket = mongoose.model('Ticket', TicketSchecma)

export default Ticket
