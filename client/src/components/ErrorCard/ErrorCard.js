import styled from 'styled-components/macro'

const ErrorCard = ({ title, message }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>{message}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: var(--color-red);
  border: 2px solid var(--color-lila-dark);
  border-radius: 10px;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem auto;
  max-width: 300px;
  min-width: 200px;
  padding: 0.5rem;

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`

export default ErrorCard
