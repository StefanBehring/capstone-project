import styled from 'styled-components/macro'
import { useHistory } from 'react-router-dom'

const ButtonBack = () => {
  const history = useHistory()

  const goBackHandler = () => {
    history.goBack()
  }

  return <Button onClick={goBackHandler}>Back</Button>
}

const Button = styled.button`
  background-color: var(--color-blue);
  border: none;
  border-radius: 10px;
  color: #fff;
  font-family: var(--font-family);
  font-size: 1rem;
  margin: 0.5rem auto;
  padding: 0.7rem 1rem;
  width: 100%;

  &:hover {
    background-color: var(--color-blue-hover);
    font-family: var(--font-family);
  }
`

export default ButtonBack
