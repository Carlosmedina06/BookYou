import jwt from 'jsonwebtoken'

import User from '../../models/User.js'
import { sendMailNewUser } from '../../emailer/emailer.js'

const signupController = async (req, res) => {
  try {
    if (req.body.providerData[0].providerId !== 'google.com') {
      const { email, displayName } = req.body
      const user = await User.findOne({ email })

      if (!user) {
        const results = await User.create({
          email,
          name: displayName,
          username: email,
        })
        const userForToken = {
          email: results.email,
          id: results._id,
          name: results.name,
          username: results.username,
          img: results.img,
          role: results.role,
          subscription: results.subscription,
        }
        const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

        sendMailNewUser(results)

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
          img: user.img,
          role: user.role,
          subscription: user.subscription,
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
          subscription: results.subscription,
        }
        const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

        sendMailNewUser(results)
        res.status(200).json({
          token,
        })
      }
    }
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
}

export default signupController
