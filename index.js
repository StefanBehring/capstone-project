const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path')
const connectDatabase = require('./connectDatabase')
const errorHandler = require('./errorHandler')
require('dotenv').config()

const app = express()

const { PORT, MONGODB_URI } = process.env

connectDatabase(MONGODB_URI)

app.use(express.json())
app.use(morgan('common'))
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
)

app.use('/api/auth', require('./routes/auth'))
app.use('/api/dashboard', require('./routes/dashboard'))
app.use('/api/unwatched-movies', require('./routes/unwatched-movies'))
app.use('/api/users', require('./routes/users'))
app.use('/api/tmdb', require('./routes/tmdb'))
app.use('/api/movies', require('./routes/movies'))
app.use('/api/votings', require('./routes/votings'))

app.use(errorHandler)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
