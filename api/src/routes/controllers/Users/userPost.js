import bcrypt from 'bcrypt'

import User from '../../../models/User.js'

const userPost = async (req, res) => {
  const { username, email, password, name } = req.body

  const passwordHash = await bcrypt.hash(password, 10)
  const user = new User({
    username,
    email,
    password: passwordHash,
    name,
    books: [],
  })

  const savedUser = await user.save()

  res.status(201).json(savedUser)
}

export default userPost
