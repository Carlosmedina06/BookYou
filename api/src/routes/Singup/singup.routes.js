import { Router } from 'express'

import singupController from '../../controllers/Signup/Signup.js'

const singupRouter = Router()

singupRouter.post('/', singupController)

export default singupRouter
