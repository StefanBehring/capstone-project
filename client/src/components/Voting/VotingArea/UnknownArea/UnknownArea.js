import styled from 'styled-components/macro'
import ButtonUnknown from '../Buttons/ButtonUnknown/ButtonUnknown'
import ButtonBothUnknown from '../Buttons/ButtonBothUnknown/ButtonBothUnknown'

const UnknownArea = ({ firstMovieTitle, secondMovieTitle }) => {
  return (
    <Wrapper>
      <AreaVoteUnknown>
        <ButtonUnknown />
        <p>
          Haven't Watched
          <br />
          {firstMovieTitle}
        </p>
      </AreaVoteUnknown>
      <AreaVoteUnknown>
        <ButtonBothUnknown />
        <p>Both Not Watched</p>
      </AreaVoteUnknown>
      <AreaVoteUnknown>
        <ButtonUnknown />
        <p>
          Haven't Watched
          <br />
          {secondMovieTitle}
        </p>
      </AreaVoteUnknown>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const AreaVoteUnknown = styled.div`
  display: flex;
  align-items: center;

  p {
    color: var(--color-black);
    margin: 0 0 0 0.5rem;
  }
`

export default UnknownArea
