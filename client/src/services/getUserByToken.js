import axios from 'axios'

const getUserByToken = token => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  }

  return axios.get('/api/auth', config).then(response => response.data)
}

export default getUserByToken
