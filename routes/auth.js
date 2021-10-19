const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const auth = require('../middleware/auth')

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
            response.status(200).json(token)
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
  } catch (err) {
    console.error(err)
    const error = { message: 'Unknown error!' }
    return next({ status: 500, message: error.message })
  }
})

router.get('/', auth, async (request, response, next) => {
  try {
    const user = await User.findById(request.user.id).select('-password')
    response.status(200).json(user)
  } catch (err) {
    console.error(err)
    const error = { message: 'Unknown error!' }
    return next({ status: 500, message: error.message })
  }
})

module.exports = router
