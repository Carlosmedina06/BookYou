import { Router } from 'express'

import LoginController from '../../controllers/login/login'

const loginRouter = Router()

loginRouter.post('/', LoginController)

export default loginRouter
