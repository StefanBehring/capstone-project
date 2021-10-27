const express = require('express')
const axios = require('axios')
const serverError = require('../lib/serverError')
const Movie = require('../models/Movie')

const router = express.Router()

const { TMDB_API_KEY } = process.env

router.post('/', async (request, response, next) => {
  const { tmdbId } = request.body

  if (tmdbId === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${tmdbId}?api_key=${TMDB_API_KEY}`
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

  const newMovie = { tmdbId, rating: 1400 }

  Movie.create(newMovie)
    .then(movie => response.status(201).json(movie))
    .catch(next)
})

router.get('/:movieId', async (request, response, next) => {
  const { movieId } = request.params

  try {
    const movie = await Movie.findById(movieId)
    if (!movie) {
      console.error('Movie does not exist')
      return next({ status: 404, message: 'Movie does not exist' })
    }
    response.status(200).json(movie)
  } catch (error) {
    serverError(error, next)
  }
})

router.patch('/:movieId', async (request, response, next) => {
  const { movieId } = request.params
  const { rating } = request.body

  if (!rating) {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  try {
    const movie = await Movie.findByIdAndUpdate(
      movieId,
      { rating },
      { new: true }
    )
    if (!movie) {
      console.error('Movie does not exist')
      return next({ status: 404, message: 'Movie does not exist' })
    }
    response.status(200).json(movie)
  } catch (error) {
    serverError(error, next)
  }
})

router.delete('/:movieId', async (request, response, next) => {
  const { movieId } = request.params

  try {
    const movie = await Movie.findByIdAndDelete(movieId)
    if (!movie) {
      console.error('Movie does not exist')
      return next({ status: 404, message: 'Movie does not exist' })
    }
    response.status(200).json(movie)
  } catch (error) {
    serverError(error, next)
  }
})

module.exports = router
