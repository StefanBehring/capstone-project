import styled from 'styled-components/macro'
import { IconContext } from 'react-icons'

import { IoHomeSharp } from 'react-icons/io5'

const ButtonHome = () => {
  return (
    <Wrapper>
      <IconContext.Provider value={{ size: '30px' }}>
        <IoHomeSharp />
      </IconContext.Provider>
      <span>Home</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50;
  width: 80;
`

export default ButtonHome
