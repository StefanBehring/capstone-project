import styled from 'styled-components/macro'
import H3 from '../../../styled/H3'
import ParagraphCenter from '../../../styled/ParagraphCenter'

const SuccessCard = ({ title, message }) => {
  return (
    <Wrapper>
      <H3>{title}</H3>
      <ParagraphCenter>{message}</ParagraphCenter>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--color-green);
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem auto;
  max-width: 300px;
  min-width: 200px;
  padding: 0.5rem;
`

export default SuccessCard
