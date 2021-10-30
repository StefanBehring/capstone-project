import styled from 'styled-components/macro'

const ButtonRed = ({ message, onClickFunction }) => {
  return <Button onClick={onClickFunction}>{message}</Button>
}

const Button = styled.button`
  background-color: var(--color-red);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: var(--font-family);
  font-size: 1rem;
  margin: 0.5rem auto;
  padding: 0.7rem 1rem;
  width: 100%;

  &:hover {
    background-color: var(--color-red-hover);
    font-family: var(--font-family);
  }
`

export default ButtonRed
