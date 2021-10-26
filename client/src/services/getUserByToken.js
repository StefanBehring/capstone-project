import axios from 'axios'

const getUserByToken = token => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  }

  return axios.get('/api/auth', config)
}

export default getUserByToken
