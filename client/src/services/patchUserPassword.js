import axios from 'axios'

const patchUserPassword = (userId, password) => {
  return axios.patch(`/api/users/${userId}`, { password: password })
}

export default patchUserPassword
