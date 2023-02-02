import jwt from 'jsonwebtoken'

import Ticket from '../../models/Ticket.js'
import User from '../../models/User.js'

const createTicket = async (req, res) => {
  try {
    const { subject, content } = req.body

    if (!subject || !content) res.status(401).send('Missin information')
    const authorization = req.get('authorization')

    if (authorization.length <= 7) {
      res.status(401).json('token missing')
    }
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.SECRET)

      if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
      }
      const ownerTicketUser = await User.findById(decodedToken.id)

      const ticket = new Ticket({
        subject,
        content,
        user: ownerTicketUser._id,
      })

      await ticket.save()
      res
        .status(200)
        .json(
          `Tu ticket con asunto ${ticket.subject} con código único ${ticket.id} fue enviado a soporte`,
        )
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export default createTicket
