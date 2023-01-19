import { Router } from 'express'

import loginController from '../../controllers/login/login.js'

const loginRouter = Router()

loginRouter.post('/', loginController)

export default loginRouter
