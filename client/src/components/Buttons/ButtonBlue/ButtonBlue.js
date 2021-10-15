import styled from 'styled-components/macro'

const ButtonBlue = ({ message }) => {
  return <Button>{message}</Button>
}

const Button = styled.button`
  background-color: var(--color-blue);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: var(--font-family);
  margin: 0.5rem auto;
  padding: 0.5rem 0.8rem;

  &:hover {
    background-color: var(--color-blue-hover);
    font-family: var(--font-family);
  }
`

export default ButtonBlue
