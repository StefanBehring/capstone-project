import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import MovieCard from '../MovieCard/MovieCard'
import VotingArea from './VotingArea/VotingArea'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'

const Voting = () => {
  const [movies, setMovies] = useState([])
  const [voting, setVoting] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [componentError, setComponentError] = useState('')

  const votingHandler = async direction => {
    const firstMovieWon = direction === 'UP'
    const isCanceled = false
    try {
      await axios.patch(`/api/votings/${voting._id}`, {
        firstMovieWon,
        isCanceled,
      })
      setMovies([])
      setIsLoading(true)
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
          userId: '616d7853560568b10ce8d06f',
          firstMovieId: responseMovies.data[0]._id,
          secondMovieId: responseMovies.data[1]._id,
        }

        const responseVotings = await axios.post(`/api/votings`, newVoting)

        setMovies(responseMovies.data)
        setVoting(responseVotings.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setComponentError({ message: error.message })
        setIsLoading(false)
      }
    }

    if (isLoading) fetchMovies()
  }, [isLoading])

  if (componentError !== '') {
    return <ErrorCard title="Error" message={componentError.message} />
  }

  if (isLoading || movies.length < 2) {
    return <LoadingSpinner />
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
