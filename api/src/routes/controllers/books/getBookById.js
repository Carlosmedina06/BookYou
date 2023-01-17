const getBookById = (req, res) => {
  res.status(200).json(`getBookById ${req.params.id}`)
}

export default getBookById
