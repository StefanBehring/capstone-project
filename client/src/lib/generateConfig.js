const generateConfig = token => {
  return {
    headers: {
      'x-auth-token': token,
    },
  }
}

export default generateConfig
