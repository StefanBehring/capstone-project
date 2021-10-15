import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import ButtonHome from './Buttons/ButtonHome/ButtonHome'
import ButtonVoting from './Buttons/ButtonVoting/ButtonVoting'

const Navigation = () => {
  return (
    <Nav>
      <NavLink to="/">
        <ButtonHome />
      </NavLink>
      <NavLink to="/voting">
        <ButtonVoting />
      </NavLink>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  width: 100%;
`

const NavLink = styled(Link)`
  color: var(--color-black);
  text-decoration: none;

  &:active,
  &:hover {
    color: var(--color-primary-dark);
  }
`

export default Navigation
