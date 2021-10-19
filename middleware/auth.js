const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token')
  console.log(token)

  if (!token) {
    return res.status(401).json({ message: 'Not authorized!' })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    req.user = decoded.user
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Token is invalid!' })
  }
}
