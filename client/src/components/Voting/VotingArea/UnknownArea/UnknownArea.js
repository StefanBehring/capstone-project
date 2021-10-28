import styled from 'styled-components/macro'
import ButtonUnknown from '../Buttons/ButtonUnknown/ButtonUnknown'
import ButtonBothUnknown from '../Buttons/ButtonBothUnknown/ButtonBothUnknown'

const UnknownArea = ({
  onUnknownMovieClick,
  firstMovieTitle,
  secondMovieTitle,
}) => {
  return (
    <Wrapper>
      <AreaVoteUnknown>
        <ButtonUnknown
          onUnknownMovieClick={onUnknownMovieClick}
          direction="UP"
        />
        <p>
          Haven't Watched
          <br />
          {firstMovieTitle}
        </p>
      </AreaVoteUnknown>
      <AreaVoteUnknown>
        <ButtonBothUnknown
          onUnknownMovieClick={onUnknownMovieClick}
          direction="MIDDLE"
        />
        <p>Both Not Watched</p>
      </AreaVoteUnknown>
      <AreaVoteUnknown>
        <ButtonUnknown
          onUnknownMovieClick={onUnknownMovieClick}
          direction="DOWN"
        />
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
    color: var(--color-primary-light);
    margin: 0 0 0 0.5rem;
  }
`

export default UnknownArea
