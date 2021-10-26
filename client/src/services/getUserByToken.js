import axios from 'axios'
import generateConfig from '../lib/generateConfig'

const getUserByToken = token => {
  const config = generateConfig(token)

  return axios.get('/api/auth', config).then(response => response.data)
}

export default getUserByToken
