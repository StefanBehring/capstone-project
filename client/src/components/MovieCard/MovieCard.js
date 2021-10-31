import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import MovieCardWrapper from '../../styled/MovieCardWrapper'
import Poster from '../../styled/Poster'
import H3 from '../../styled/H3'
import Paragraph from '../../styled/Paragraph'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import useMovieFromTmdb from '../../hooks/useMovieFromTmdb'

const MovieCard = ({ tmdbId }) => {
  const movie = useMovieFromTmdb(tmdbId)

  if (movie.isLoading) {
    return <LoadingSpinner />
  }

  return (
    <MovieCardWrapper>
      <Link to={`/movie-details/${tmdbId}`}>
        <Poster src={movie.imgUrl} alt="" height="562" width="375" />
      </Link>
      <div>
        <H3>
          <MovieLink to={`/movie-details/${tmdbId}`}>{movie.title}</MovieLink>
        </H3>
        <Paragraph>
          <MovieLink to={`/movie-details/${tmdbId}`}>{movie.year}</MovieLink>
        </Paragraph>
        <Paragraph>
          <MovieLink to={`/movie-details/${tmdbId}`}>{movie.genre}</MovieLink>
        </Paragraph>
      </div>
    </MovieCardWrapper>
  )
}

const MovieLink = styled(Link)`
  color: var(--color-primary-light);
  text-decoration: none;
`

export default MovieCard
