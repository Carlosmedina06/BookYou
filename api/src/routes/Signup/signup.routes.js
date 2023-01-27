import { Router } from 'express'

import signupController from '../../controllers/Signup/Signup.js'

const signupRouter = Router()

signupRouter.post('/', signupController)

export default signupRouter
