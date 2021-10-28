import ComponentsWrapper from '../../styled/ComponentsWrapper'
import H2 from '../../styled/H2'
import { Redirect } from 'react-router'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import UnwatchedMovie from './UnwatchedMovie/UnwatchedMovie'
import useUnwatchedMovies from '../../hooks/useUnwatchedMovies'

const UnwatchedMoviesOverview = () => {
  const unwatchedMoviesData = useUnwatchedMovies()

  if (unwatchedMoviesData.isLoading) {
    return <LoadingSpinner />
  }

  if (unwatchedMoviesData.errorMessage !== '') {
    return <Redirect to="/not-logged-in" />
  }

  return (
    <ComponentsWrapper>
      <H2>Unwatched Movies</H2>
      {unwatchedMoviesData.infoData.map(movieId => {
        return <UnwatchedMovie key={movieId} unwatchedMovieId={movieId} />
      })}
    </ComponentsWrapper>
  )
}

export default UnwatchedMoviesOverview
