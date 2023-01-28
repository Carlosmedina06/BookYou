import { Router } from 'express'

import successController from '../../controllers/success/success.js'

const successRouter = Router()

successRouter.put('/', successController)

export default successRouter
