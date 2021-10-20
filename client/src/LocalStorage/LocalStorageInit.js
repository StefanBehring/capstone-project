const LocalStorageInit = () => {
  if (localStorage.getItem('authToken') === null) {
    localStorage.setItem('authToken', JSON.stringify(''))
  }
}

export default LocalStorageInit
