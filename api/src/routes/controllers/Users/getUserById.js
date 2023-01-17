const getUserById = (req, res) => {
  res.json(`Searching for user with ID ${req.params.id}`)
}

export default getUserById
