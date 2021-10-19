import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { IconContext } from 'react-icons'

import { FaUserCircle as IconUser } from 'react-icons/fa'

const NavBarLinkProfile = () => {
  return (
    <NavBarLink to="/profile" activeClassName="is-active">
      <IconContext.Provider value={{ size: '30px' }}>
        <IconUser />
      </IconContext.Provider>
      <span>Profile</span>
    </NavBarLink>
  )
}

const NavBarLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50;
  width: 80;
  color: var(--color-black);
  text-decoration: none;

  &.${props => props.activeClassName} {
    color: var(--color-primary-dark);
  }
`

export default NavBarLinkProfile
