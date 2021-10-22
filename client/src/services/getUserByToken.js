import axios from 'axios'

const getUserByToken = config => {
  return axios.get('/api/auth', config)
}

export default getUserByToken
