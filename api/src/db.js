import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectionString =
  'mongodb://mongo:WvBlEj0kRoFevavLjcXT@containers-us-west-23.railway.app:7588'
const database = () => {
  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('Database connection established  ')
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.error(err))
}

export default database
