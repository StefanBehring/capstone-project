const mongoose = require('mongoose')

function connectDatabase(url) {
  mongoose
    .connect(url)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('can not connect: ' + error))
}

module.exports = connectDatabase
