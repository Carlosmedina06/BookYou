import mongoose from 'mongoose'

const Category = new mongoose.Schema({
  category: String,
})

Category.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Categorys = mongoose.model('Category', Category)

export default Categorys
