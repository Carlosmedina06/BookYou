import { Router } from 'express'

import { errorHandler } from '../middlewares/errorHandler.js'

import userRouter from './User/User.routes.js'
import bookRouter from './Book/Book.routes.js'
import commentRouter from './Comment/Comment.routes.js'
import categoryRouter from './Category/Category.routes.js'
import loginRouter from './Login/Login.routes.js'
import checkOutRouter from './Checkout/Checkout.routes.js'
import signupRouter from './Signup/signup.routes.js'
import successRouter from './Success/Success.routes.js'
import ticketRouter from './tickets/Ticket.routes.js'
import bannedWordsRouter from './BannedWords/bannedWords.js'
import favorites from './Favorites/Favorites.routes.js'
import getViewsRouter from './PageViews/PageViews.routes.js'

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
router.use('/signup', signupRouter)

//= =====================Checkout Routes================================
router.use('/checkout', checkOutRouter)

//= =====================success Routes================================
router.use('/success', successRouter)

//= =====================Tickets Routes================================
router.use('/ticket', ticketRouter)

//= =====================Tickets Routes================================
router.use('/bannedwords', bannedWordsRouter)

//= =====================Tickets Routes================================
router.use('/favorites', favorites)

//= =====================Pageviews Route================================
router.use('/pageviews', getViewsRouter)

//= =====================Error Middlewares================================

router.use(errorHandler)

export default router
