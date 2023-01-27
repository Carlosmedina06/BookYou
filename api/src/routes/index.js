import { Router } from 'express'

import { errorHandler } from '../middlewares/errorHandler.js'

import userRouter from './User/User.routes.js'
import bookRouter from './Book/Book.routes.js'
import commentRouter from './Comment/Comment.routes.js'
import categoryRouter from './Category/Category.routes.js'
import loginRouter from './Login/Login.routes.js'
import checkOutRouter from './Checkout/Checkout.routes.js'
// import singupRouter from './Singup/singup.routes.js'

const router = Router()

//= ======================Users Routes================================
router.use('/user', userRouter)

//= ======================Books Routes================================
router.use('/book', bookRouter)

//= =====================Comments Routes=============================
router.use('/comment', commentRouter)

//= =====================Category Routes================================
router.use('/category', categoryRouter)

//= =====================Login Routes================================
router.use('/login', loginRouter)
//= =====================Login Routes================================
// router.use('/signup', singupRouter)

//= =====================Checkout Routes================================
router.use('/checkout', checkOutRouter)

//= =====================Error Middlewares================================

router.use(errorHandler)

export default router
