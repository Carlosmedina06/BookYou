import jwt from 'jsonwebtoken'

import User from '../../models/User.js'

const successController = async (req, res) => {
  const authorization = req.get('authorization')

  try {
    if (authorization.length <= 7) {
      res.status(401).json('token missing')
    }
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      const token = authorization.substring(7)
      const decodedToken = jwt.verify(token, process.env.SECRET)

      if (!token || !decodedToken.id) {
        return res.status(401).json({ error: 'token missing or invalid' })
      }

      const user = await User.findById(decodedToken.id)

      if (!user) return res.status(404).json({ error: 'user not found' })
      if (user.subscription === 'free') user.subscription = 'premium'
      await user.save()

      const userForToken = {
        email: user.email,
        id: user._id,
        name: user.name,
        img: user.img,
        role: user.role,
        subsscription: user.subscription,
      }
      const newToken = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

      return res.status(200).json({ token: newToken })
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log({ error: error.message })
  }
}

export default successController
