const serverError = (error, next) => {
  console.error(error)
  return next({ message: 'Server error!' })
}

module.exports = serverError
