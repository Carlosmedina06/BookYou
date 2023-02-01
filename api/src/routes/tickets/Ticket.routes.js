import { Router } from 'express'

import createTicket from '../../controllers/tickets/ticketPost.js'
import getAllTickets from '../../controllers/tickets/getTickets.js'
import deleteTicket from '../../controllers/tickets/deleteTicket.js'

const ticketRouter = Router()

ticketRouter.get('/', getAllTickets)
ticketRouter.post('/create', createTicket)
ticketRouter.delete('/delete/:id', deleteTicket)

export default ticketRouter
