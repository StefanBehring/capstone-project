import axios from 'axios'

const patchUserPassword = (userId, password) => {
  const body = { password: password }

  return axios.patch(`/api/users/${userId}`, body)
}

export default patchUserPassword
