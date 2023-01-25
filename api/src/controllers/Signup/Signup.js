import jwt from 'jsonwebtoken'

import User from '../../models/User.js'

const signupController = async (req, res) => {
  try {
    if (req.body.providerData[0].providerId !== 'google.com') {
      const { email, displayName } = req.body
      const user = await User.findOne({ email })

      if (!user) {
        const results = await User.create({
          email,
          name: displayName,
        })
        const userForToken = {
          email: results.email,
          id: results._id,
          name: results.name,
          picture: results.picture,
          role: results.role,
          subsscription: results.subscription,
        }
        const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

        return res.status(200).send({
          token,
        })
      }
      res.status(400).json({ error: 'User already exists' })
    } else {
      const decodedToken = jwt.decode(req.body.stsTokenManager.accessToken)

      const { email, name, picture } = decodedToken
      const user = await User.findOne({ email })

      if (user) {
        const userForToken = {
          email: user.email,
          id: user._id,
          name: user.name,
          picture: user.picture,
          role: user.role,
          subsscription: user.subscription,
        }
        const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

        return res.status(200).send({
          token,
        })
      } else {
        const results = await User.create({
          email,
          name,
          username: email,
          picture,
        })
        const userForToken = {
          email: results.email,
          id: results._id,
          username: results.username,
          name: results.name,
          picture: results.picture,
          role: results.role,
          subsscription: results.subscription,
        }
        const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

        res.status(200).send({
          token,
        })
      }
    }
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export default signupController
