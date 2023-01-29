import { Router } from 'express'

import { createPago } from '../../controllers/MercadoPago/Mercadopago.js'

const checkOutRouter = Router()

checkOutRouter.get('/', createPago)

export default checkOutRouter
