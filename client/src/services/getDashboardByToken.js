import axios from 'axios'
import generateConfig from '../lib/generateConfig'

const getDashboardByToken = token => {
  const config = generateConfig(token)

  return axios.get('/api/dashboard', config).then(response => response.data)
}

export default getDashboardByToken
