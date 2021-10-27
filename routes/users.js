const express = require('express')
const bcrypt = require('bcryptjs')
const serverError = require('../lib/serverError')
const User = require('../models/User')

const router = express.Router()

router.post('/', async (request, response, next) => {
  const { username, email, password } = request.body

  if (username === '' || email === '' || password === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  try {
    let userTest = await User.findOne({ username })
    if (userTest) {
      const errorUser = { message: 'Username/E-Mail already exists' }
      return next({ status: 400, message: errorUser.message })
    }

    let emailTest = await User.findOne({ email })
    if (emailTest) {
      const errorEmail = { message: 'Username/E-Mail already exists' }
      return next({ status: 400, message: errorEmail.message })
    }
  } catch (err) {
    console.error(err)
    const error = { message: 'Unknown error!' }
    return next({ status: 400, message: error.message })
  }

  const newUser = {
    username,
    email,
    password,
    unwatchedMovies: [],
    isAdmin: false,
  }

  const salt = await bcrypt.genSalt(10)
  newUser.password = await bcrypt.hash(password, salt)

  User.create(newUser)
    .then(user =>
      response.status(201).json({
        username: user.username,
        email: user.email,
        _id: user._id,
        unwatchedMovies: user.unwatchedMovies,
        isAdmin: user.isAdmin,
      })
    )
    .catch(next)
})

router.get('/:userId', async (request, response, next) => {
  const { userId } = request.params

  try {
    const user = await User.findById(userId)
    if (!user) {
      console.error('User does not exist')
      return next({ status: 404, message: 'User does not exist' })
    }

    response.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      unwatchedMovies: user.unwatchedMovies,
      isAdmin: user.isAdmin,
    })
  } catch (error) {
    serverError(error, next)
  }
})

router.patch('/unknownmovies/:userId', async (request, response, next) => {
  const { userId } = request.params
  const { firstMovie, secondMovie } = request.body

  if (firstMovie === '') {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  try {
    const user = await User.findById(userId)
    if (!user) {
      return next({ status: 404, message: 'User does not exist' })
    }

    const newUnwatchedMovies = user.unwatchedMovies
    if (!newUnwatchedMovies.includes(firstMovie)) {
      newUnwatchedMovies.push(firstMovie)
    }
    if (secondMovie !== '') {
      if (!newUnwatchedMovies.includes(secondMovie)) {
        newUnwatchedMovies.push(secondMovie)
      }
    }

    const newUser = await User.findByIdAndUpdate(
      userId,
      { unwatchedMovies: newUnwatchedMovies },
      { new: true }
    )

    response.status(200).json({
      id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      unwatchedMovies: newUser.unwatchedMovies,
      isAdmin: newUser.isAdmin,
    })
  } catch (error) {
    serverError(error, next)
  }
})

router.patch('/:userId', async (request, response, next) => {
  const { userId } = request.params
  const { password } = request.body

  if (!password) {
    const error = { message: 'Information missing.' }
    return next({ status: 400, message: error.message })
  }

  const salt = await bcrypt.genSalt(10)
  newPassword = await bcrypt.hash(password, salt)

  User.findByIdAndUpdate(userId, { password: newPassword }, { new: true })
    .then(user => {
      if (!user) {
        throw new Error('Could not change the password')
      }
      response.status(200).json({
        id: user._id,
        username: user.username,
        email: user.email,
        unwatchedMovies: user.unwatchedMovies,
        isAdmin: user.isAdmin,
      })
    })
    .catch(error =>
      next({ status: 404, message: error.message || 'Document not found' })
    )
})

router.delete('/:userId', async (request, response, next) => {
  const { userId } = request.params

  try {
    const user = await User.findByIdAndDelete(userId)
    if (!user) {
      console.error('User does not exist')
      return next({ status: 404, message: 'User does not exist' })
    }
    response.status(200).json(user)
  } catch (error) {
    serverError(error, next)
  }
})

module.exports = router
