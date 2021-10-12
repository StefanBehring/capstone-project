import styled from 'styled-components'

const ButtonRed = ({ message }) => {
  return <Button>{message}</Button>
}

const Button = styled.button`
  background-color: var(--color-red);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: var(--font-family);
  margin: 0.5rem auto;
  padding: 0.5rem 0.8rem;

  &:hover {
    background-color: var(--color-red-hover);
    color: #000;
    font-family: var(--font-family);
  }
`

export default ButtonRed
