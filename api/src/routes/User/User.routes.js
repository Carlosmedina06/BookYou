import { Router } from 'express'

import getAllUsers from '../../controllers/Users/getAllUsers.js'
import getUserById from '../../controllers/Users/getUserById.js'
import userDelete from '../../controllers/Users/userDelete.js'
import userUpdate from '../../controllers/Users/userUpdate.js'
import userActive from '../../controllers/Users/UserActive.js'
// import userPost from '../../controllers/Users/userPost.js'

const userRouter = Router()

//= ======================Users Routes================================
userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUserById)
userRouter.put('/update', userUpdate)
userRouter.put('/delete/:id', userDelete)
userRouter.put('/active/:id', userActive)
// userRouter.post('/create', userPost)

export default userRouter
