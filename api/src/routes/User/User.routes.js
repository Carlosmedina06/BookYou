import { Router } from 'express'

import getAllUsers from '../../controllers/Users/getAllUsers.js'
import getUserById from '../../controllers/Users/getUserById.js'
import userDelete from '../../controllers/Users/userDelete.js'
// import userPost from '../../controllers/Users/userPost.js'
import userUpdate from '../../controllers/Users/userUpdate.js'

const userRouter = Router()

//= ======================Users Routes================================
userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserById)
userRouter.put('/update/:id', userUpdate)
userRouter.delete('/delete/:id', userDelete)
// userRouter.post('/create', userPost)

export default userRouter
