import styled from 'styled-components/macro'
import NavBarLinkHome from './NavBarLinks/NavBarLinkHome/NavBarLinkHome'
import NavBarLinkProfile from './NavBarLinks/NavBarLinkProfile/NavBarLinkProfile'
import NavBarLinkToplist from './NavBarLinks/NavBarLinkToplist/NavBarLinkToplist'
import NavBarLinkVoting from './NavBarLinks/NavBarLinkVoting/NavBarLinkVoting'

const Navigation = () => {
  return (
    <Nav>
      <NavBarLinkHome />
      <NavBarLinkVoting />
      <NavBarLinkToplist />
      <NavBarLinkProfile />
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
