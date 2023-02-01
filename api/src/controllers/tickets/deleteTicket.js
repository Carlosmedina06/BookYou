import Ticket from '../../models/Ticket.js'

const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params

    await Ticket.findByIdAndDelete(id)
    res.status(200).json('Ticket borrado con éxito')
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export default deleteTicket
