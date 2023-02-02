import Ticket from '../../models/Ticket.js'

const getAllTickets = async (req, res) => {
  try {
    const allTickets = await Ticket.find()

    res.status(200).json(allTickets)
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
}

export default getAllTickets
