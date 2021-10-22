const express = require('express')
const axios = require('axios')
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
    console.error(error)
    return next({ status: 500, message: 'Server error' })
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
    console.error(error)
    return next({ status: 500, message: 'Server error' })
  }
})

router.get('/voting/:userId', async (request, response, next) => {
  const { userId } = request.params

  try {
    const user = await User.findById(userId)
    if (!user) {
      console.error('User does not exist')
      return next({ status: 404, message: 'User does not exist' })
    }

    const movies = await Movie.find()
    if (!movies) {
      console.error('Error receiving movies from database')
      return next({
        status: 404,
        message: 'Error receiving movies from database',
      })
    }

    const moviesAvailable = movies.length - user.unwatchedMovies.length
    if (moviesAvailable < 2) {
      const error = { message: 'Not enough movies in the database.' }
      console.error(error.message)
      next({ status: 400, message: error.message || 'No documents found' })
    }

    let firstMovieIndex
    let gotFirstMovie = false
    do {
      firstMovieIndex = Math.floor(Math.random() * movies.length)
      if (!user.unwatchedMovies.includes(movies[firstMovieIndex]._id)) {
        gotFirstMovie = true
      }
    } while (!gotFirstMovie)

    let secondMovieIndex = firstMovieIndex
    let gotSecondMovie = false

    do {
      secondMovieIndex = Math.floor(Math.random() * movies.length)
      if (
        firstMovieIndex !== secondMovieIndex &&
        !user.unwatchedMovies.includes(movies[secondMovieIndex]._id)
      ) {
        gotSecondMovie = true
      }
    } while (!gotSecondMovie)

    const dataVoting = [movies[firstMovieIndex], movies[secondMovieIndex]]

    response.status(200).json(dataVoting)
  } catch (error) {
    console.error(error)
    return next({ status: 500, message: 'Server error' })
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
    console.error(error)
    return next({ status: 500, message: 'Server error' })
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
    console.error(error)
    return next({ status: 500, message: 'Server error' })
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
    console.error(error)
    return next({ status: 500, message: 'Server error' })
  }
})

module.exports = router
