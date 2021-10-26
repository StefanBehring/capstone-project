import styled from 'styled-components/macro'
import { Redirect } from 'react-router'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import useFetchUnwatchedMovies from '../../hooks/useFetchUnwatchedMovies'
import UnwatchedMovie from './UnwatchedMovie/UnwatchedMovie'

const UnwatchedMoviesOverview = () => {
  const unwatchedMoviesData = useFetchUnwatchedMovies()

  if (unwatchedMoviesData.isLoading) {
    return <LoadingSpinner />
  }

  if (unwatchedMoviesData.errorMessage !== '') {
    alert('Redirecting to notLoggedIn')
    return <Redirect to="/not-logged-in" />
  }

  return (
    <UnwatchedMoviesWrapper>
      <h2>Unwatched Movies</h2>
      {unwatchedMoviesData.infoData.map(movie => {
        return <UnwatchedMovie key={movie} unwatchedMovieId={movie} />
      })}
    </UnwatchedMoviesWrapper>
  )
}

const UnwatchedMoviesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--color-black);
    margin-bottom: 0.3rem;
  }
`

export default UnwatchedMoviesOverview
