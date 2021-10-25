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

  const handleSubmit = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('authToken'))

      if (token === '') {
        return <Redirect to="/notLoggedIn" />
      } else {
        const config = {
          headers: {
            'x-auth-token': token,
          },
        }

        const patchResult = await patchUnwatchedMovieByToken(
          unwatchedMovieId,
          config
        )

        alert(patchResult.data.token)

        setIsSuccess(true)
      }
    } catch (error) {
      console.error(error)
      alert(error)
    }
  }

  if (unwatchedMovieData.isLoading) {
    return <LoadingSpinner />
  }

  if (isSuccess) {
    return <Redirect to="/unwatched-movies" />
  }

  if (unwatchedMovieData.errorMessage !== '') {
    alert('ERROR' + unwatchedMovieData.errorMessage)
    return <Redirect to="/notLoggedIn" />
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
