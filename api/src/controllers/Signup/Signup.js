import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import axios from 'axios'

import User from '../../models/User.js'

const signupController = async (req, res) => {
  if (req.body.googleAccessToken) {
    // Singup with google
    try {
      const { googleAccessToken } = req.body

      axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${googleAccessToken}`,
          },
        })
        .then(async (response) => {
          const email = response.data.email
          const username = response.data.given_name
          const img = response.data.picture

          const existingUser = await User.findOne({ email })

          if (existingUser) return res.status(401).json({ error: 'User already exist' })

          const results = await User.create({
            username,
            email,
            img,
          })
          const userForToken = {
            username: results.username,
            email: results.email,
            id: results._id,
            name: results.name,
          }
          const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

          res.status(200).send({ token, username: results.username, name: results.name })
        })
    } catch (error) {
      res.status(500).json({ error: 'something went wrong' })
    }
  } else {
    // Singup local
    try {
      const { password, email, name, username } = req.body
      const user = await User.findOne({ email })

      if (user) return res.status(401).json({ error: 'User already exist' })

      const saltRounds = 10
      const passwordHash = await bcrypt.hash(password, saltRounds)

      const results = await User.create({
        username,
        email,
        name,
        passwordHash,
      })
      const userForToken = {
        username: results.username,
        email: results.email,
        id: results._id,
        name: results.name,
      }
      const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

      res.status(200).send({ token, username: results.username, name: results.name })
    } catch (error) {
      res.status(500).json({ error: 'something went wrong' })
    }
  }
}

export default signupController
