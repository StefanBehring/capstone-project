const LocalStorageInit = isLoggedIn => {
  if (localStorage.getItem('authToken') === null || !isLoggedIn) {
    localStorage.setItem('authToken', JSON.stringify(''))
  }
}

export default LocalStorageInit
