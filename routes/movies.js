const express = require('express')
const axios = require('axios')
const serverError = require('../lib/serverError')
const Movie = require('../models/Movie')
const User = require('../models/User')

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

router.get('/all', async (request, response, next) => {
  try {
    const movies = await Movie.find()
    if (!movies) {
      console.error('Error receiving movies from database')
      return next({
        status: 404,
        message: 'Error receiving movies from database',
      })
    }
    response.status(200).json(movies)
  } catch (error) {
    return serverError(error)
  }
})

router.get('/top', async (request, response, next) => {
  try {
    const movies = await Movie.find().sort({ rating: -1 }).limit(100)
    if (!movies) {
      console.error('Error receiving movies from database')
      return next({
        status: 404,
        message: 'Error receiving movies from database',
      })
    }
    response.status(200).json(movies)
  } catch (error) {
    return serverError(error)
  }
})

router.get('/voting/:userId', async (request, response, next) => {
  const { userId } = request.params

  try {
    const user = await User.findById(userId).select('unwatchedMovies')
    if (!user) {
      console.error('User does not exist')
      return next({ status: 404, message: 'User does not exist' })
    }
    const unwatchedMovies = user.unwatchedMovies

    const movies = await Movie.find()
    if (!movies) {
      console.error('Error receiving movies from database')
      return next({
        status: 404,
        message: 'Error receiving movies from database',
      })
    }

    const moviesAvailableCount = movies.length - unwatchedMovies.length
    if (moviesAvailableCount < 2) {
      const error = { message: 'Not enough movies in the database.' }
      console.error(error.message)
      next({ status: 400, message: error.message || 'No documents found' })
    }

    const availableMovies = movies.filter(
      movie => !unwatchedMovies.includes(movie._id)
    )

    let firstMovieIndex = Math.floor(Math.random() * availableMovies.length)
    let secondMovieIndex
    let gotSecondMovie = false
    do {
      secondMovieIndex = Math.floor(Math.random() * availableMovies.length)
      if (firstMovieIndex !== secondMovieIndex) {
        gotSecondMovie = true
      }
    } while (!gotSecondMovie)

    const dataVoting = [
      availableMovies[firstMovieIndex],
      availableMovies[secondMovieIndex],
    ]

    response.status(200).json(dataVoting)
  } catch (error) {
    return serverError(error)
  }
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
    return serverError(error)
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
    return serverError(error)
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
    return serverError(error)
  }
})

module.exports = router
