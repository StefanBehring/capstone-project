import styled from 'styled-components/macro'
import { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import axios from 'axios'
import UnknownArea from './UnknownArea/UnknownArea'
import RatingArea from './RatingArea/RatingArea'
import ErrorCard from '../../Messages/ErrorCard/ErrorCard'
import LoadingSpinner from '../../Messages/LoadingSpinner/LoadingSpinner'

const VotingArea = ({ onVoteClick, firstMovieTmdbId, secondMovieTmdbId }) => {
  const [movies, setMovies] = useState({})
  const [componentError, setComponentError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async (firstTmdbId, secondTmdbId) => {
      try {
        const responseMovieOne = await axios.get(`/api/tmdb/${firstTmdbId}`)
        const responseMovieTwo = await axios.get(`/api/tmdb/${secondTmdbId}`)

        setMovies({
          firstMovie: responseMovieOne.data,
          secondMovie: responseMovieTwo.data,
        })
        setIsLoading(false)
      } catch (error) {
        console.error(error)
        setComponentError({ message: error.message })
        setIsLoading(false)
      }
    }

    if (isLoading) fetchMovies(firstMovieTmdbId, secondMovieTmdbId)
  }, [isLoading, firstMovieTmdbId, secondMovieTmdbId])

  if (componentError !== '') {
    return <ErrorCard title="Error" message={componentError.message} />
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <AreaVoting>
      <IconContext.Provider value={{ size: '48px' }}>
        <UnknownArea
          firstMovieTitle={movies.firstMovie.title}
          secondMovieTitle={movies.secondMovie.title}
        />
        <RatingArea onVoteClick={onVoteClick} />
      </IconContext.Provider>
    </AreaVoting>
  )
}

const AreaVoting = styled.div`
  background-color: var(--color-white-light);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--color-black);
  display: flex;
  justify-content: space-between;
  margin: 0.5rem auto;
  padding: 0.5rem;
  min-height: 250px;
  width: 350px;
`

export default VotingArea
