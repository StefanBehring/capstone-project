import axios from 'axios'

const getDashboardByToken = token => {
  const config = {
    headers: {
      'x-auth-token': token,
    },
  }

  return axios.get('/api/dashboard', config)
}

export default getDashboardByToken
