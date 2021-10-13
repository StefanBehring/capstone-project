const express = require('express')
const axios = require('axios')
const Movie = require('../models/Movie')

const router = express.Router()

const { TMDB_API_KEY } = process.env

// Comments will be deleted later on
/*
  The function has to be async, because it has to wait for the response of the tmdb api in the try catch block.
  Once it has an response, the response can be positive or negative.
  If the response is positive we allow (allowPostMovie) the movie to be posted to our database.
  If the response is negative we set an error message.
*/
router.post('/', async (request, response, next) => {
  const { tmdb_id } = request.body

  if (tmdb_id === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${tmdb_id}?api_key=${TMDB_API_KEY}`
    )

    if (response.status !== 200) {
      const error = { message: 'Unknown error connecting to tmdb.' }
      return next({ status: 400, message: error.message })
    }
  } catch (err) {
    console.error(err)
    const error = { message: 'Movie does not exist on tmdb!' }
    return next({ status: 404, message: error.message })
  }

  const newMovie = { tmdb_id, rating: 1400 }

  Movie.create(newMovie)
    .then(movie => response.status(201).json(movie))
    .catch(next)
})

router.get('/all', (request, response, next) => {
  Movie.find()
    .then(data => {
      response.status(200).json(data)
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'No documents found' })
    )
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
