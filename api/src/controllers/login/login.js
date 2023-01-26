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
        img: user.img,
        role: user.role,
        subsscription: user.subscription,
      }
      const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

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
      }
      const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

      res.status(200).json({
        token,
      })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default loginController
