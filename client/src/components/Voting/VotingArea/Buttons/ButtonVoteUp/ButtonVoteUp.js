import styled from 'styled-components/macro'
import { IoCaretUpCircle as IconUp } from 'react-icons/io5'

const ButtonVoteUp = ({ onVoteClick }) => {
  return (
    <ButtonGreen onClick={() => onVoteClick('UP')}>
      <IconUp />
    </ButtonGreen>
  )
}

const ButtonGreen = styled.button`
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

export default ButtonVoteUp
