import styled from 'styled-components/macro'
import ButtonVoteDown from '../Buttons/ButtonVoteDown/ButtonVoteDown'
import ButtonVoteUp from '../Buttons/ButtonVoteUp/ButtonVoteUp'

const RatingArea = () => {
  return (
    <AreaRating>
      <AreaVoteUp>
        <ButtonVoteUp />
        <p>Vote Up</p>
      </AreaVoteUp>
      <AreaVoteDown>
        <p>Vote Down</p>
        <ButtonVoteDown />
      </AreaVoteDown>
    </AreaRating>
  )
}

const AreaRating = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const AreaVoteUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    margin-top: 0.5rem;
  }
`

const AreaVoteDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    margin-bottom: 0.5rem;
  }
`

export default RatingArea
