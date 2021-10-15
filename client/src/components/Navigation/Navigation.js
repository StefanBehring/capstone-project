import styled from 'styled-components/macro'
import ButtonHome from './Buttons/ButtonHome/ButtonHome'
import ButtonVoting from './Buttons/ButtonVoting/ButtonVoting'

const Navigation = () => {
  return (
    <Nav>
      <ButtonHome />
      <ButtonVoting />
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  width: 100%;
`

export default Navigation
