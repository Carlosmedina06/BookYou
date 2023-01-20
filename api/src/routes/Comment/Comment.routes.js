import { Router } from 'express'

import createCommentBook from '../../controllers/Comments/createCommentBook.js'
import updateComment from '../../controllers/Comments/updateComment.js'
import deleteComment from '../../controllers/Comments/deleteComment.js'
import getCommentsUser from '../../controllers/Comments/getCommentsUser.js'

const commentRouter = Router()

commentRouter.post('/create/book', createCommentBook)
commentRouter.put('/update/:id', updateComment)
commentRouter.delete('/delete/:id', deleteComment)
commentRouter.get('/user/:id', getCommentsUser)

export default commentRouter
