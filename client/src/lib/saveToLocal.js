const saveToLocal = (key, value) => {
  alert('[saveToLocal] key: ' + key + ' || value: ' + value)
  localStorage.setItem(key, JSON.stringify(value))
}

export default saveToLocal
