const express = require('express')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const User = require('../models/User')

const router = express.Router()

const { JWT_SECRET } = process.env

router.get('/', auth, async (request, response, next) => {
  const userId = request.user.id

  try {
    const user = await User.findById(userId).select('unwatchedMovies')
    if (!user) {
      console.error('Could not find user')
      return next({ status: 404, message: 'Could not find user' })
    }

    response.status(200).json(user.unwatchedMovies)
  } catch (error) {
    console.error(error)
    return next({ status: 500, message: 'Server error' })
  }
})

router.patch('/:unwatchedMovieId', auth, async (request, response, next) => {
  const userId = request.user.id
  const { unwatchedMovieId } = request.params

  try {
    const user = await User.findById(userId)
    if (!user) {
      console.error('User does not exist')
      return next({ status: 404, message: 'User does not exist' })
    }

    const newUnwatchedMovies = user.unwatchedMovies.filter(
      movieId => movieId !== unwatchedMovieId
    )
    await User.findByIdAndUpdate(userId, {
      unwatchedMovies: newUnwatchedMovies,
    })

    response.status(200).json({ newUnwatchedMovies })
  } catch (error) {
    console.error(error)
    return next({ status: 500, message: 'Server error' })
  }
})

module.exports = router
