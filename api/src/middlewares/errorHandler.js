export const errorHandler = (error, req, res, _next) => {
  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return res.status(400).send({ message: 'Malformatted id' }).end()
  }
}
