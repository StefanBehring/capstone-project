import axios from 'axios'

const deleteUserById = userId => {
  return axios.delete(`/api/users/${userId}`)
}

export default deleteUserById
