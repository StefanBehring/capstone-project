import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { IconContext } from 'react-icons'

import { IoHomeSharp } from 'react-icons/io5'

const NavBarLinkHome = () => {
  return (
    <NavBarLink to="/">
      <IconContext.Provider value={{ size: '30px' }}>
        <IoHomeSharp />
      </IconContext.Provider>
      <span>Home</span>
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

export default NavBarLinkHome
