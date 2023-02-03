import jwt from 'jsonwebtoken'

import User from '../../models/User.js'
const userUpdate = async (req, res) => {
  try {
    const authorization = req.get('authorization')

    const { name, username, email, subscription, role, id, strike } = req.body

    if (authorization.length <= 7) {
      res.status(401).json('token missing')
    }
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.SECRET)

      if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
      }
      const modifiedUser = await User.findById(id)

      if (
        modifiedUser.id.toString() === decodedToken.id.toString() ||
        decodedToken.role === 'admin'
      ) {
        await User.findByIdAndUpdate(id, {
          name,
          username,
          email,
          role: role || 'user',
          subscription,
          strike,
        })
        res.status(200).json(`El usuario fue modificado con éxito`)
      } else {
        res.status(401).json('Acción no permitida')
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export default userUpdate
