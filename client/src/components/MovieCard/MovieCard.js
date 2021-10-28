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
      <Poster src={movie.imgUrl} alt="" height="562" width="375" />
      <div>
        <H3>{movie.title}</H3>
        <Paragraph>{movie.year}</Paragraph>
        <Paragraph>{movie.genre}</Paragraph>
      </div>
    </MovieCardWrapper>
  )
}

export default MovieCard
