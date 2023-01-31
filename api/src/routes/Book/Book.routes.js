import { Router } from 'express'

import getAllBooks from '../../controllers/books/getAllBooks.js'
import getBookById from '../../controllers/books/getBookById.js'
import bookUpdate from '../../controllers/books/bookUpdate.js'
import bookDelete from '../../controllers/books/bookDelete.js'
import bookPost from '../../controllers/books/bookPost.js'

const bookRouter = Router()

//= ======================Books Routes================================
bookRouter.get('/', getAllBooks)
bookRouter.get('/:id', getBookById)
bookRouter.put('/update/:id', bookUpdate)
bookRouter.put('/delete/:id', bookDelete)
bookRouter.post('/create', bookPost)

export default bookRouter
