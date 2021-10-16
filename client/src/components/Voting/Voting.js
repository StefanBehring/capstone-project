import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import MovieCard from '../MovieCard/MovieCard'
import VotingArea from './VotingArea/VotingArea'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'

const Voting = () => {
  const [movies, setMovies] = useState([])
  const [voting, setVoting] = useState([])
  const [componentError, setComponentError] = useState('')

  const votingHandler = async direction => {
    const first_movie_won = direction === 'UP'
    const isCanceled = false
    try {
      await axios.patch(`/api/votings/${voting._id}`, {
        first_movie_won,
        isCanceled,
      })
      setMovies([])
    } catch (error) {
      console.error(error)
      setComponentError({ message: error.message })
    }
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const responseMovies = await axios.get(`/api/movies/voting`)

        const newVoting = {
          user_id: '616af3051daf09784aaa3d08',
          first_movie_id: responseMovies.data[0]._id,
          second_movie_id: responseMovies.data[1]._id,
        }

        const responseVotings = await axios.post(`/api/votings`, newVoting)

        setMovies(responseMovies.data)
        setVoting(responseVotings.data)
      } catch (error) {
        console.error(error)
        setComponentError({ message: error.message })
      }
    }

    if (movies.length < 2) fetchMovies()
  }, [movies])

  if (componentError !== '') {
    return <ErrorCard title="Error" message={componentError.message} />
  }

  if (movies.length < 2) {
    return <Wrapper>Loading</Wrapper>
  }

  return (
    <Wrapper>
      <MovieCard tmdbId={movies[0].tmdbId} />
      <VotingArea
        firstMovieTmdbId={movies[0].tmdbId}
        secondMovieTmdbId={movies[1].tmdbId}
        onVoteClick={votingHandler}
      />
      <MovieCard tmdbId={movies[1].tmdbId} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

export default Voting
