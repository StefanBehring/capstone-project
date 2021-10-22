import axios from 'axios'

const postNewVoting = newVoting => {
  return axios.post(`/api/votings`, newVoting)
}

export default postNewVoting
