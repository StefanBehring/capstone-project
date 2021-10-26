import styled from 'styled-components/macro'
import { Redirect } from 'react-router'
import { useState } from 'react'
import LoadingSpinner from '../../Messages/LoadingSpinner/LoadingSpinner'
import MovieCard from '../../MovieCard/MovieCard'
import ButtonGreen from '../../Buttons/ButtonGreen/ButtonGreen'
import useFetchUnwatchedMovie from '../../../hooks/useFetchUnwatchedMovie'
import patchUnwatchedMovieByToken from '../../../services/patchUnwatchedMovieByToken'

const UnwatchedMovie = ({ unwatchedMovieId }) => {
  const unwatchedMovieData = useFetchUnwatchedMovie(unwatchedMovieId)

  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const token = JSON.parse(localStorage.getItem('authToken'))

      if (token === '') {
        return <Redirect to="/not-logged-in" />
      } else {
        const config = {
          headers: {
            'x-auth-token': token,
          },
        }
        await patchUnwatchedMovieByToken(unwatchedMovieId, config)
        setIsSuccess(true)
      }
    } catch (error) {
      console.error(error)
      return <Redirect to="/not-logged-in" />
    }
  }

  if (unwatchedMovieData.isLoading) {
    return <LoadingSpinner />
  }

  if (isSuccess) {
    return <Redirect to="/unwatched-movies" />
  }

  if (unwatchedMovieData.errorMessage !== '') {
    return <Redirect to="/not-logged-in" />
  }

  return (
    <UnwatchedMovieWrapper onSubmit={handleSubmit}>
      <Line />
      <MovieCard tmdbId={unwatchedMovieData.infoData.tmdbId} />
      <ButtonGreen message="Watched It!" />
    </UnwatchedMovieWrapper>
  )
}

const UnwatchedMovieWrapper = styled.form`
  display: flex;
  flex-direction: column;
`

const Line = styled.hr`
  border-top: 1px solid var(--color-black);
  width: 80%;
`

export default UnwatchedMovie
