import { Router } from 'express'

import getViews from '../../controllers/PageViews/PageViews.js'
const getViewsRouter = Router()

getViewsRouter.get('/', getViews)

export default getViewsRouter
