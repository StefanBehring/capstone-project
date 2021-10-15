import styled from 'styled-components/macro'
import { IoReloadCircle } from 'react-icons/io5'

const ButtonBothUnknown = () => {
  return (
    <ButtonRed>
      <IoReloadCircle />
    </ButtonRed>
  )
}

const ButtonRed = styled.button`
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

export default ButtonBothUnknown
