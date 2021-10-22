import axios from 'axios'

const getMoviesForVotingByUserId = userId => {
  return axios.get(`/api/movies/voting/${userId}`)
}

export default getMoviesForVotingByUserId
