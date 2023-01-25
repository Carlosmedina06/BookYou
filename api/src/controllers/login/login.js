import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import axios from 'axios'

import User from '../../models/User.js'

const loginController = async (req, res) => {
  if (req.body.googleAccessToken) {
    // login with google
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

          const existingUser = await User.findOne({ email })

          if (!existingUser) return res.status(401).json({ error: "User don't exist" })

          const userForToken = {
            username: existingUser.username,
            id: existingUser._id,
            name: existingUser.name,
            role: existingUser.role,
            subscription: existingUser.subscription,
            email: existingUser.email,
            img: existingUser.img,
            books: existingUser.books,
            comment: existingUser.comment,
          }
          const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })

          res.status(200).send({ token, username: existingUser.username, name: existingUser.name })
        })
    } catch (error) {
      res.status(500).json({ error: 'something went wrong' })
    }
  } else {
    // login local
    try {
      const { password, email } = req.body
      const user = await User.findOne({ email })
      const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password)

      if (!(user && passwordCorrect)) {
        return res.status(401).json({
          error: 'invalid email or password',
        })
      }

      const userForToken = {
        username: user.username,
        email: user.email,
        id: user._id,
        name: user.name,
        role: user.role,
        subscription: user.subscription,
        img: user.img,
        books: user.books,
        comment: user.comment,
      }
      const token = jwt.sign(userForToken, process.env.SECRET)

      res.status(200).send({ token, username: user.username, name: user.name })
    } catch (error) {
      res.status(500).json({ error: 'something went wrong' })
    }
  }
}

export default loginController
