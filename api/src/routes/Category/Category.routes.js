import { Router } from 'express'

import geAllCategorys from '../../controllers/categorys/getAllCategorys.js'
import postCategory from '../../controllers/categorys/postCategory.js'

const categoryRouter = Router()

categoryRouter.get('/', geAllCategorys)
categoryRouter.post('/', postCategory)

export default categoryRouter
