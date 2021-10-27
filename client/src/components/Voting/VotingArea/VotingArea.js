import styled from 'styled-components/macro'
import { IconContext } from 'react-icons'
import UnknownArea from './UnknownArea/UnknownArea'
import RatingArea from './RatingArea/RatingArea'
import ErrorCard from '../../Messages/ErrorCard/ErrorCard'
import LoadingSpinner from '../../Messages/LoadingSpinner/LoadingSpinner'
import useVotingArea from '../../../hooks/useVotingArea'

const VotingArea = ({
  onVoteClick,
  onUnknownMovieClick,
  firstMovieTmdbId,
  secondMovieTmdbId,
}) => {
  const moviesData = useVotingArea(firstMovieTmdbId, secondMovieTmdbId)

  if (moviesData.errorMessage !== '') {
    return <ErrorCard title="Error" message={moviesData.errorMessage} />
  }

  if (moviesData.isLoading) {
    return <LoadingSpinner />
  }

  return (
    <AreaVoting>
      <IconContext.Provider value={{ size: '48px' }}>
        <UnknownArea
          onUnknownMovieClick={onUnknownMovieClick}
          firstMovieTitle={moviesData.firstMovie.title}
          secondMovieTitle={moviesData.secondMovie.title}
        />
        <RatingArea onVoteClick={onVoteClick} />
      </IconContext.Provider>
    </AreaVoting>
  )
}

const AreaVoting = styled.div`
  background-color: var(--color-white-light);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--color-black);
  display: flex;
  justify-content: space-between;
  margin: 0.5rem auto;
  padding: 0.5rem;
  min-height: 250px;
  width: 340px;
`

export default VotingArea
