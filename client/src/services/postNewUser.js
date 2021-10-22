import axios from 'axios'

const postNewUser = (username, email, password) => {
  return axios.post(`/api/users`, {
    username: username,
    email: email,
    password: password,
  })
}

export default postNewUser
