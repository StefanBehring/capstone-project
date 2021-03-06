import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import MovieCard from '../MovieCard/MovieCard'
import VotingArea from './VotingArea/VotingArea'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import patchVotingsByid from '../../services/patchVotingsById'
import postNewVoting from '../../services/postNewVoting'
import getMoviesForVotingByUserId from '../../services/getMoviesForVotingByUserId'
import patchUserUnknownMoviesByUserId from '../../services/patchUserUnknownMoviesByUserId'
import useUser from '../../hooks/useUser'

const Voting = () => {
  const user = useUser()
  const userData = user.userData

  const [movies, setMovies] = useState([])
  const [voting, setVoting] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [componentError, setComponentError] = useState('')

  const votingHandler = async direction => {
    const firstMovieWon = direction === 'UP'
    const isCanceled = false
    try {
      await patchVotingsByid(voting._id, firstMovieWon, isCanceled)
      setMovies([])
      setVoting([])
      setIsLoading(true)
    } catch (error) {
      console.error(error)
      setComponentError({ message: error.message })
    }
  }

  const unknownMovieHandler = async direction => {
    let unknownMovies = {}
    switch (direction) {
      case 'UP':
        unknownMovies = { firstMovie: movies[0]._id, secondMovie: '' }
        break
      case 'DOWN':
        unknownMovies = { firstMovie: movies[1]._id, secondMovie: '' }
        break
      default:
        unknownMovies = {
          firstMovie: movies[0]._id,
          secondMovie: movies[1]._id,
        }
    }

    try {
      await patchUserUnknownMoviesByUserId(
        userData._id,
        unknownMovies.firstMovie,
        unknownMovies.secondMovie
      )
      await patchVotingsByid(voting._id, false, true)
      setMovies([])
      setVoting([])
      setIsLoading(true)
    } catch (error) {
      console.error(error)
      setComponentError({ message: error.message })
    }
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const responseMovies = await getMoviesForVotingByUserId(userData._id)

        const newVoting = {
          userId: userData._id,
          firstMovieId: responseMovies.data[0]._id,
          secondMovieId: responseMovies.data[1]._id,
        }

        const responseVotings = await postNewVoting(newVoting)

        setMovies(responseMovies.data)
        setVoting(responseVotings.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setComponentError({ message: error.message })
        setIsLoading(false)
      }
    }

    if (isLoading && userData._id !== undefined) {
      fetchMovies()
    }
  }, [isLoading, userData])

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
        onUnknownMovieClick={unknownMovieHandler}
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
