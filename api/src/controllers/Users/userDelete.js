import User from '../../models/User.js'

const userDelete = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) res.status(400).json('ID required')

    // const authorization = req.get('authorization')

    // if (authorization.length <= 7) {
    //   res.status(401).json('token missing')
    // }
    // if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    //   const token = authorization.substring(7)
    //   const decodedToken = jwt.verify(token, process.env.SECRET)

    // if (!token || !decodedToken.id) {
    //   return res.status(401).json({ error: 'token missing or invalid' })
    // }

    const user = await User.findById(id)

    user.available = false
    user.save()

    res.status(200).json(`The  ${user.username} was deleted`)
  } catch (error) {
    next(error)
  }
}

export default userDelete
