import styled from 'styled-components/macro'
import { IoCaretDownCircle as IconDown } from 'react-icons/io5'

const ButtonVoteDown = ({ onVoteClick }) => {
  return (
    <Button onClick={() => onVoteClick('DOWN')}>
      <IconDown />
    </Button>
  )
}

const Button = styled.button`
  background-color: var(--color-green);
  color: var(--color-white-default);
  border: none;
  border-radius: 10px;
  width: 60px;
  height: 60px;

  &:hover {
    background-color: var(--color-green-hover);
  }
`

export default ButtonVoteDown
