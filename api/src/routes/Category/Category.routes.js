import { Router } from 'express'

import getAllCategorys from '../../controllers/Categorys/getAllCategorys'
import postCategory from '../../controllers/Categorys/postCategory'

const categoryRouter = Router()

categoryRouter.get('/category', getAllCategorys)
categoryRouter.post('/category', postCategory)

export default categoryRouter
