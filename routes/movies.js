const express = require('express')
const Movie = require('../models/Movie')

const router = express.Router()

router.post('/', (request, response, next) => {
  const { tmdb_id } = request.body

  if (tmdb_id === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  const newMovie = { tmdb_id, rating: 1400 }

  Movie.create(newMovie)
    .then(movie => response.status(201).json(movie))
    .catch(next)
})

router.get('/:id', (request, response, next) => {
  const { id } = request.params

  Movie.findById(id)
    .then(data => {
      if (!data) {
        throw new Error('The movie does not exist!')
      }
      response.status(200).json(data)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.patch('/:id', (request, response, next) => {
  const { id } = request.params
  const { rating } = request.body

  if (!rating) {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  Movie.findByIdAndUpdate(id, { rating }, { new: true })
    .then(movie => {
      if (!movie) {
        throw new Error('The movie does not exist')
      }
      response.status(200).json(movie)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.delete('/:id', (request, response, next) => {
  const { id } = request.params

  Movie.findByIdAndDelete(id)
    .then(movie => {
      if (!movie) {
        throw new Error('The movie does not exist')
      }
      response.status(200).json(movie)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

module.exports = router
