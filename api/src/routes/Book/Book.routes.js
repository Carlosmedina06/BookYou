import { Router } from 'express'

import bookPost from '../../controllers/books/bookPost'
import getBookById from '../../controllers/books/getBookById'
import bookDelete from '../controllers/books/bookDelete'
import bookUpdate from '../controllers/books/bookUpdate'
import getAllBooks from '../controllers/books/getAllBooks'

const bookRouter = Router()

//= ======================Books Routes================================
bookRouter.get('/', getAllBooks)
bookRouter.get('/:id', getBookById)
bookRouter.put('/update/:id', bookUpdate)
bookRouter.delete('/delete/:id', bookDelete)
bookRouter.post('/create', bookPost)

export default bookRouter
