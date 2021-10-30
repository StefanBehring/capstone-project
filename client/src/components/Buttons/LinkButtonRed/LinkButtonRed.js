import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const LinkButtonRed = ({ message, direction }) => {
  return <Button to={direction}>{message}</Button>
}

const Button = styled(Link)`
  background-color: var(--color-red);
  border: none;
  border-radius: 10px;
  color: #fff;
  margin: 0.5rem auto;
  padding: 0.7rem 1rem;
  text-align: center;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-color: var(--color-red-hover);
  }
`

export default LinkButtonRed
