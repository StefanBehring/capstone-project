const express = require('express')
const connectDatabase = require('./connectDatabase')
const errorHandler = require('./errorHandler')
require('dotenv').config()

const app = express()

const { PORT, MONGODB_URI } = process.env

connectDatabase(MONGODB_URI)

app.use(express.json())

app.use('/api/users', require('./routes/users'))
app.use('/api/movies', require('./routes/movies'))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
