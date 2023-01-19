import { Router } from 'express'

import stripeCheckout from '../../controllers/stripe/stripeCheckout'

const checkOutRouter = Router()

checkOutRouter.post('/', stripeCheckout)

export default checkOutRouter
