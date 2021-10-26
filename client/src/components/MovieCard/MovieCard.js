import styled from 'styled-components/macro'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import useMovieFromTmdb from '../../hooks/useMovieFromTmdb'

const MovieCard = ({ tmdbId }) => {
  const movie = useMovieFromTmdb(tmdbId)

  if (movie.isLoading) {
    return <LoadingSpinner />
  }

  return (
    <Wrapper>
      <img src={movie.imgUrl} alt="" height="562" width="375" />
      <div>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <p>{movie.genre}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--color-white-light);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--color-black);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0.5rem auto;
  padding: 0.5rem;
  width: 350px;

  img {
    height: 100px;
    margin-right: 0.5rem;
    width: auto;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0.5rem 0 0 0;
  }
`

export default MovieCard
