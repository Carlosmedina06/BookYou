import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import router from './routes/index.js'

const server = express()

server.use(express.json())
server.use(morgan('dev'))
server.use(cors())
server.use(fileUpload({ useTempFiles: true }))

server.use('/', router)

export default server
