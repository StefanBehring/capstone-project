import styled from 'styled-components/macro'
import { IoHelpCircle as IconHelp } from 'react-icons/io5'

const ButtonUnknown = ({ onUnknownMovieClick, direction }) => {
  const unknownMovieClickHandler = () => {
    onUnknownMovieClick(direction)
  }

  return (
    <Button onClick={unknownMovieClickHandler}>
      <IconHelp />
    </Button>
  )
}

const Button = styled.button`
  background-color: var(--color-red);
  color: var(--color-white-default);
  border: none;
  border-radius: 10px;
  width: 60px;
  height: 60px;

  &:hover {
    background-color: var(--color-red-hover);
  }
`

export default ButtonUnknown
