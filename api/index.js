import server from './src/app.js'
import database from './src/db.js'

const port = process.env.PORT || 3001

server.listen(`${port}`, () => {
  database()
  // eslint-disable-next-line no-console
  console.log(`running server on http://localhost:${port}`)
})
