import axios from 'axios'

const getDashboardByToken = config => {
  return axios.get('/api/dashboard', config)
}

export default getDashboardByToken
