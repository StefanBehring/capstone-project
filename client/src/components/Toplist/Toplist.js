import styled from 'styled-components/macro'
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
    <Wrapper>
      <h2>Toplist</h2>
      {moviesData.movies.map((movie, index) => {
        return (
          <div key={movie._id}>
            <Ranking>#{index + 1}</Ranking>
            <MovieCard key={movie._id} tmdbId={movie.tmdbId} />
          </div>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: var(--color-black);
  display: flex;
  flex-direction: column;

  h2 {
    text-align: center;
  }
`

const Ranking = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 0.7rem auto 0.3rem;
`

export default Toplist
