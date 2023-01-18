import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../../../models/User.js'

const loginRouter = async (req, res) => {
  const { username, password } = req.body
  const user = await User.findOne({ username })
  const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.password)

  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid username or password',
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id,
    name: user.name,
  }
  const token = jwt.sign(userForToken, process.env.SECRET)

  res.status(200).send({ token, username: user.username, name: user.name })
}

export default loginRouter
