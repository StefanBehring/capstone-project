import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const LinkButtonGreen = ({ message, direction }) => {
  return <Button to={direction}>{message}</Button>
}

const Button = styled(Link)`
  background-color: var(--color-green);
  border: none;
  border-radius: 10px;
  color: #fff;
  margin: 0.5rem auto;
  padding: 0.5rem 0.8rem;
  text-decoration: none;

  &:hover {
    background-color: var(--color-green-hover);
  }
`

export default LinkButtonGreen
