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
//= ======================Comments Controllers==========================
import createCommentBook from './controllers/Comments/createCommentBook.js'
import updateComment from './controllers/Comments/updateComment.js'
import deleteComment from './controllers/Comments/deleteComment.js'
import CreateCommentUser from './controllers/Comments/createCommentUser.js'
import getCommentsBook from './controllers/Comments/getCommentsBook.js'
import getCommentsUser from './controllers/Comments/getCommentsUser.js'
import getAllComments from './controllers/Comments/getAllComments.js'
//= ======================Login Controllers================================
import loginRouter from './controllers/Login/Login.js'

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
//= =====================Comments Routes=============================
router.post('/comment/create/book', createCommentBook)
router.put('/comment/update/:id', updateComment)
router.delete('/comment/delete/:id', deleteComment)
router.post('/comment/create/user', CreateCommentUser)
router.get('/comment/book/:id', getCommentsBook)
router.get('/comment/user/:id', getCommentsUser)
router.get('/allComents', getAllComments)
//= =====================Login Routes================================
router.post('/login', loginRouter)

// Middlewares
router.use(errorHandler)
export default router
