import ComponentsWrapper from '../../styled/ComponentsWrapper'
import H2 from '../../styled/H2'
import Ranking from '../../styled/Ranking'
import ErrorCard from '../Messages/ErrorCard/ErrorCard'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import MovieCard from '../MovieCard/MovieCard'
import useMoviesTop from '../../hooks/useMoviesTop'

const Toplist = () => {
  const moviesData = useMoviesTop()

  if (moviesData.errorMessage !== '') {
    return <ErrorCard title="Error" message={moviesData.errorMessage} />
  }

  if (moviesData.isLoading) {
    return <LoadingSpinner />
  }

  return (
    <ComponentsWrapper>
      <H2>Toplist</H2>
      {moviesData.movies.map((movie, index) => {
        return (
          <div key={movie._id}>
            <Ranking>#{index + 1}</Ranking>
            <MovieCard key={movie._id} tmdbId={movie.tmdbId} />
          </div>
        )
      })}
    </ComponentsWrapper>
  )
}

export default Toplist
