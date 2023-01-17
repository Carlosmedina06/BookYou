import Router from 'express'
const app = Router()

app.get('/users', (req, res) => {
  res.json('route getAllUsers')
})

export default app
