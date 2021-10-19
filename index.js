const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const connectDatabase = require('./connectDatabase')
const errorHandler = require('./errorHandler')
require('dotenv').config()

const app = express()

const { PORT, MONGODB_URI } = process.env

connectDatabase(MONGODB_URI)

app.use(express.json())
app.use(morgan('common'))
app.use(helmet())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/tmdb', require('./routes/tmdb'))
app.use('/api/movies', require('./routes/movies'))
app.use('/api/votings', require('./routes/votings'))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
