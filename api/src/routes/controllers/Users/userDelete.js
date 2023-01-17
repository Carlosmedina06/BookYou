const userDelete = (req, res) => {
  res.status(200).json(`Delete user whit ID ${req.params.id}`)
}

export default userDelete
