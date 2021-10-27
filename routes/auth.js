const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const auth = require('../middleware/auth')
const serverError = require('../lib/serverError')

const router = express.Router()

const { JWT_SECRET } = process.env

router.post('/', async (request, response, next) => {
  const { username, password } = request.body

  try {
    const user = await User.findOne({ username })

    if (!user) {
      const error = {
        message: 'Incorrect data! Either username or password are wrong.',
      }
      return next({ status: 400, message: error.message })
    }

    bcrypt.compare(password, user.password, (errCompare, resCompare) => {
      if (errCompare) {
        console.error(errCompare)
        return next({
          status: 400,
          message: 'Incorrect data! Either username or password are wrong.',
        })
      }
      if (resCompare) {
        const payload = {
          user: {
            id: user._id,
          },
        }

        // TODO: expiration to 3600
        jwt.sign(
          payload,
          JWT_SECRET,
          { expiresIn: 360000 },
          (errJWT, token) => {
            if (errJWT) {
              console.error(errJWT)
              return next({ status: 400, message: errJWT.message })
            }
            response.status(200).json({ token, isUserAdmin: user.isAdmin })
          }
        )
      } else {
        const error = {
          message: 'Incorrect data! Either username or password are wrong.',
        }
        console.error(error.message)
        return next({ status: 400, message: error.message })
      }
    })
  } catch (error) {
    serverError(error, next)
  }
})

router.get('/', auth, async (request, response, next) => {
  try {
    const userId = response.locals.user.id
    const user = await User.findById(userId).select('-password')
    response.status(200).json(user)
  } catch (error) {
    serverError(error, next)
  }
})

module.exports = router
