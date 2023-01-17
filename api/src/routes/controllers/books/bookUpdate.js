const bookUpdate = (req, res) => {
  res.status(200).json(`bookPut by id ${req.params.id}`)
}

export default bookUpdate
