import { Router } from 'express'

import createCommentBook from '../../controllers/Comments/createCommentBook'
import deleteComment from '../../controllers/Comments/deleteComment'
import getCommentsUser from '../../controllers/Comments/getCommentsUser'
import updateComment from '../../controllers/Comments/updateComment'

const commentRouter = Router()

commentRouter.post('/create/book', createCommentBook)
commentRouter.put('/update/:id', updateComment)
commentRouter.delete('/delete/:id', deleteComment)
commentRouter.get('/user/:id', getCommentsUser)

export default commentRouter
