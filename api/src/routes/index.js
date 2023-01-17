import { Router } from 'express'

import getAllUsers from './controllers/getAllUsers.js'

const router = Router()

router.use('/', getAllUsers)

export default router
