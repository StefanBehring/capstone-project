import styled from 'styled-components/macro'
import MovieCard from '../MovieCard/MovieCard'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import useMoviesAll from '../../hooks/useMoviesAll'

const MovieOverview = () => {
  const moviesData = useMoviesAll()

  if (moviesData.isLoading) {
    return <LoadingSpinner />
  }

  return (
    <Wrapper>
      <h2>Movie Overview</h2>
      <MovieCount>Moviecount: {moviesData.movies.length}</MovieCount>
      {moviesData.movies.map(movie => (
        <MovieCard key={movie.tmdbId} tmdbId={movie.tmdbId} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: var(--color-black);
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0.5rem auto;
  }
`

const MovieCount = styled.p`
  margin: 0.5rem auto 0;
`

export default MovieOverview
