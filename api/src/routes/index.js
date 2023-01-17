import { Router } from 'express'

import { errorHandler } from '../middlewares/errorHandler.js'

//= =======================Users Controllers==========================
import getAllUsers from './controllers/Users/getAllUsers.js'
import getUserById from './controllers/Users/getUserById.js'
import userUpdate from './controllers/Users/userUpdate.js'
import userDelete from './controllers/Users/userDelete.js'
import userPost from './controllers/Users/userPost.js'
//= =======================Books Controllers==========================
import getAllBooks from './controllers/books/getAllBooks.js'
import getBookById from './controllers/books/getBookById.js'
import bookUpdate from './controllers/books/bookUpdate.js'
import bookDelete from './controllers/books/bookDelete.js'
import bookPost from './controllers/books/bookPost.js'
const router = Router()

//= ======================Users Routes================================
router.get('/users', getAllUsers)
router.get('/user/:id', getUserById)
router.put('/user/update/:id', userUpdate)
router.delete('/user/delete/:id', userDelete)
router.post('/user/create', userPost)
//= ======================Books Routes================================
router.get('/books', getAllBooks)
router.get('/book/:id', getBookById)
router.put('/book/update/:id', bookUpdate)
router.delete('/book/delete/:id', bookDelete)
router.post('/book/create', bookPost)
//= ======================Comments Routes=============================

// Middlewares
router.use(errorHandler)
export default router
