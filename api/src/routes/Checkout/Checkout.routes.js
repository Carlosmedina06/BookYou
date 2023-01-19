import { Router } from 'express'

import stripeCheckout from '../../controllers/stripe/stripeCheckout.js'

const checkOutRouter = Router()

checkOutRouter.post('/', stripeCheckout)

export default checkOutRouter
