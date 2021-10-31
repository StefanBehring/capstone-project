import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'
import useMovieFromTmdb from '../../hooks/useMovieFromTmdb'
import CardWrapper from '../../styled/CardWrapper'
import H2 from '../../styled/H2'
import PosterBig from '../../styled/PosterBig'
import LoadingSpinner from '../Messages/LoadingSpinner/LoadingSpinner'
import ParagraphCenter from '../../styled/ParagraphCenter'

const MovieDetails = () => {
  const { tmdbId } = useParams()
  const movie = useMovieFromTmdb(tmdbId)

  if (movie.isLoading) {
    return <LoadingSpinner />
  }

  return (
    <CardWrapper>
      <PosterBig src={movie.imgUrl} alt="" height="562" width="375" />
      <H2>{movie.title}</H2>
      <ParagraphCenter>
        {movie.year} {movie.genre}
      </ParagraphCenter>
      <ParagraphCenter>{movie.overview}</ParagraphCenter>
      <Detail>
        <span>Average</span>
        <span>{movie.voteAverage}</span>
      </Detail>
      <Detail>
        <span>Runtime</span>
        <span>{movie.runtime} min</span>
      </Detail>
      <Detail>
        <span>Budget</span>
        <span>
          {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'USD',
          }).format(movie.budget)}
        </span>
      </Detail>
      <Detail>
        <span>Revenue</span>
        <span>
          {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'USD',
          }).format(movie.revenue)}
        </span>
      </Detail>
    </CardWrapper>
  )
}

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  width: 100%;
`

export default MovieDetails
