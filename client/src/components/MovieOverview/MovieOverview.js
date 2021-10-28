import ComponentsWrapper from '../../styled/ComponentsWrapper'
import ParagraphCenter from '../../styled/ParagraphCenter'
import H2 from '../../styled/H2'
import MovieCard from '../MovieCard/MovieCard'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import useMoviesAll from '../../hooks/useMoviesAll'

const MovieOverview = () => {
  const moviesData = useMoviesAll()

  if (moviesData.isLoading) {
    return <LoadingSpinner />
  }

  return (
    <ComponentsWrapper>
      <H2>Movie Overview</H2>
      <ParagraphCenter>Moviecount: {moviesData.movies.length}</ParagraphCenter>
      {moviesData.movies.map(movie => (
        <MovieCard key={movie.tmdbId} tmdbId={movie.tmdbId} />
      ))}
    </ComponentsWrapper>
  )
}

export default MovieOverview
