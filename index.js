const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const connectDatabase = require('./connectDatabase')
const errorHandler = require('./errorHandler')
require('dotenv').config()

const app = express()

const { PORT, MONGODB_URI } = process.env

connectDatabase(MONGODB_URI)

app.use(express.json())
app.use(morgan('common'))
app.use(helmet())

// whitelist
const whitelist = ['http://localhost:3000', 'http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}
app.use(cors(corsOptions))

app.use('/api/users', require('./routes/users'))
app.use('/api/movies', require('./routes/movies'))
app.use('/api/votings', require('./routes/votings'))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
