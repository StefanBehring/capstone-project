import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { IconContext } from 'react-icons'

import { IoStatsChartSharp as IconToplist } from 'react-icons/io5'

const NavBarLinkToplist = () => {
  return (
    <NavBarLink to="/toplist" activeClassName="is-active">
      <IconContext.Provider value={{ size: '30px' }}>
        <IconToplist />
      </IconContext.Provider>
      <span>Toplist</span>
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

export default NavBarLinkToplist
