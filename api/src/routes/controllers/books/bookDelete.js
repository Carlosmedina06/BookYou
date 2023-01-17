const bookDelete = (req, res) => {
  res.status(200).json(`bookDelete by Id ${req.params.id}`)
}

export default bookDelete
