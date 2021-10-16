import styled from 'styled-components/macro'
import ButtonUnknown from '../Buttons/ButtonUnknown/ButtonUnknown'
import ButtonBothUnknown from '../Buttons/ButtonBothUnknown/ButtonBothUnknown'

const IdkArea = ({ firstMovieTitle, secondMovieTitle }) => {
  return (
    <AreaIdk>
      <AreaVoteIdk>
        <ButtonUnknown />
        <p>
          Haven't Watched
          <br />
          {firstMovieTitle}
        </p>
      </AreaVoteIdk>
      <AreaVoteIdk>
        <ButtonBothUnknown />
        <p>Both Not Watched</p>
      </AreaVoteIdk>
      <AreaVoteIdk>
        <ButtonUnknown />
        <p>
          Haven't Watched
          <br />
          {secondMovieTitle}
        </p>
      </AreaVoteIdk>
    </AreaIdk>
  )
}

const AreaIdk = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const AreaVoteIdk = styled.div`
  display: flex;
  align-items: center;

  p {
    color: var(--color-black);
    margin: 0 0 0 0.5rem;
  }
`

export default IdkArea
