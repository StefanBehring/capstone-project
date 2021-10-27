const serverError = error => {
  console.error(error)
  return next({ message: 'Server error!' })
}

module.exports = serverError
