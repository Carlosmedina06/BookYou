import jwt from 'jsonwebtoken'

import User from '../../models/User.js'

const loginController = async (req, res) => {
  try {
    const decodedToken = jwt.decode(req.body.stsTokenManager.accessToken)

    const { email, name, picture } = decodedToken
    const user = await User.findOne({ email })

    if (user) {
      const userForToken = {
        email: user.email,
        id: user._id,
        name: user.name,
        username: user.username,
        img: user.img,
        role: user.role,
        subsscription: user.subscription,
        available: user.available,
        strike: user.strike,
      }
      const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '24h' })

      return res.status(200).json({
        token,
      })
    } else {
      const results = await User.create({
        email,
        name,
        username: email,
        img: picture,
      })
      const userForToken = {
        email: results.email,
        id: results._id,
        username: results.username,
        name: results.name,
        img: results.img,
        role: results.role,
        subsscription: results.subscription,
        available: results.available,
        strike: results.strike,
      }
      const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '24h' })

      res.status(200).json({
        token,
      })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default loginController
