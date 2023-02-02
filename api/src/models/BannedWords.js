import mongoose from 'mongoose'

const BannedWord = new mongoose.Schema({
  word: String,
})

BannedWord.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const BannedWords = mongoose.model('BannedWord', BannedWord)

export default BannedWords
