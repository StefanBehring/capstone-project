import styled from 'styled-components/macro'
import IdkArea from './IdkArea/IdkArea'
import RatingArea from './RatingArea/RatingArea'

const VotingArea = () => {
  return (
    <AreaVoting>
      <IdkArea />
      <RatingArea />
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
  width: 350px;
`

export default VotingArea
