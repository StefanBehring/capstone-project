import axios from 'axios'

const postAuthForLogin = (username, password) => {
  return axios.post(`/api/auth`, { username, password })
}

export default postAuthForLogin
