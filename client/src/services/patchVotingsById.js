import axios from 'axios'

const patchVotingsByid = (votingId, firstMovieWon, isCanceled) => {
  return axios.patch(`/api/votings/${votingId}`, {
    firstMovieWon: firstMovieWon,
    isCanceled: isCanceled,
  })
}

export default patchVotingsByid
