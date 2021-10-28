import styled from 'styled-components/macro'
import ParagraphCenter from '../../../styled/ParagraphCenter'

const ErrorCard = ({ title, message }) => {
  return (
    <Wrapper>
      <H3>{title}</H3>
      <ParagraphCenter>{message}</ParagraphCenter>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--color-red);
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

const H3 = styled.h3`
  color: var(--color-white-default);
  margin: 0;
`

export default ErrorCard
