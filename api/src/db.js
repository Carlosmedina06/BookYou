import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const { DB_PASSWORD } = process.env

const connectionString = `mongodb+srv://carlosmedina06:${DB_PASSWORD}@carlosdb.9aqig43.mongodb.net/test`

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
