import MovieCard from '../MovieCard/MovieCard'
import styled from 'styled-components/macro'
import VotingArea from './VotingArea/VotingArea'

const Voting = () => {
  return (
    <Wrapper>
      <MovieCard tmdbId="550" />
      <VotingArea />
      <MovieCard tmdbId="600" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

export default Voting
