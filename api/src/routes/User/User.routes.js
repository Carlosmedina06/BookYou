import { Router } from 'express'

import getAllUsers from '../controllers/Users/getAllUsers'
import getUserById from '../controllers/Users/getUserById'
import userDelete from '../controllers/Users/userDelete'
import userPost from '../controllers/Users/userPost'
import userUpdate from '../controllers/Users/userUpdate'

const userRouter = Router()

//= ======================Users Routes================================
userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserById)
userRouter.put('/update/:id', userUpdate)
userRouter.delete('/delete/:id', userDelete)
userRouter.post('/create', userPost)

export default userRouter
