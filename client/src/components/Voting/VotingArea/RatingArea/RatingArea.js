import styled from 'styled-components/macro'
import ParagraphCenter from '../../../../styled/ParagraphCenter'
import ButtonVoteDown from '../Buttons/ButtonVoteDown/ButtonVoteDown'
import ButtonVoteUp from '../Buttons/ButtonVoteUp/ButtonVoteUp'

const RatingArea = ({ onVoteClick }) => {
  return (
    <AreaRating>
      <AreaVoteUp>
        <ButtonVoteUp onVoteClick={onVoteClick} />
        <ParagraphCenter>Upper</ParagraphCenter>
      </AreaVoteUp>
      <ParagraphCenter>Vote</ParagraphCenter>
      <AreaVoteDown>
        <ParagraphCenter>Below</ParagraphCenter>
        <ButtonVoteDown onVoteClick={onVoteClick} />
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
