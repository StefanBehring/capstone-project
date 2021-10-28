import { Redirect } from 'react-router'
import { useState } from 'react'
import FormWrapper from '../../../styled/FormWrapper'
import Line from '../../../styled/Line'
import LoadingSpinner from '../../Messages/LoadingSpinner/LoadingSpinner'
import MovieCard from '../../MovieCard/MovieCard'
import ButtonGreen from '../../Buttons/ButtonGreen/ButtonGreen'
import patchUnwatchedMovieByToken from '../../../services/patchUnwatchedMovieByToken'
import useUnwatchedMovie from '../../../hooks/useUnwatchedMovie'

const UnwatchedMovie = ({ unwatchedMovieId }) => {
  const unwatchedMovie = useUnwatchedMovie(unwatchedMovieId)

  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const token = JSON.parse(localStorage.getItem('authToken'))

      if (!token) {
        setIsError(true)
      }

      await patchUnwatchedMovieByToken(unwatchedMovieId, token)
      setIsSuccess(true)
    } catch (error) {
      console.error(error)
      setIsError(true)
    }
  }

  if (unwatchedMovie.isLoading) {
    return <LoadingSpinner />
  }

  if (unwatchedMovie.errorMessage !== '' || isError) {
    return <Redirect to="/not-logged-in" />
  }

  if (isSuccess) {
    return <Redirect to="/unwatched-movies" />
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Line />
      <MovieCard tmdbId={unwatchedMovie.tmdbId} />
      <ButtonGreen message="Watched It!" />
    </FormWrapper>
  )
}

export default UnwatchedMovie
