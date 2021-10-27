const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

module.exports = (request, response, next) => {
  const token = request.header('x-auth-token')

  if (!token) {
    return response.status(401).json({ message: 'Not authorized!' })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    response.locals.user = decoded.user
    next()
  } catch (error) {
    return response.status(401).json({ message: 'Token is invalid!' })
  }
}
