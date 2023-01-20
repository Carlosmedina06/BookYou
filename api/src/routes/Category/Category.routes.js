import { Router } from 'express'

import geAllCategorys from '../../controllers/Categorys/getAllCategorys.js'
import postCategory from '../../controllers/Categorys/postCategory.js'

const categoryRouter = Router()

categoryRouter.get('/', geAllCategorys)
categoryRouter.post('/', postCategory)

export default categoryRouter
