import styled from 'styled-components/macro'
import { IconContext } from 'react-icons'

import { IoStar } from 'react-icons/io5'

const ButtonVoting = () => {
  return (
    <Wrapper>
      <IconContext.Provider value={{ size: '30px' }}>
        <IoStar />
      </IconContext.Provider>
      <span>Voting</span>
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

export default ButtonVoting
