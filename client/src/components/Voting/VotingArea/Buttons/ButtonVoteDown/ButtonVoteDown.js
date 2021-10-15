import styled from 'styled-components/macro'
import { IconContext } from 'react-icons'
import { IoCaretDownCircle } from 'react-icons/io5'

const ButtonVoteDown = () => {
  return (
    <ButtonGreen>
      <IconContext.Provider value={{ size: '48px' }}>
        <IoCaretDownCircle />
      </IconContext.Provider>
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

export default ButtonVoteDown
