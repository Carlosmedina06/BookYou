import { Router } from 'express'

import geAllCategorys from '../../controllers/categorys/getAllCategorys.js'
import postCategory from '../../controllers/categorys/postCategory.js'

const categoryRouter = Router()

categoryRouter.get('/category', geAllCategorys)
categoryRouter.post('/category', postCategory)

export default categoryRouter
