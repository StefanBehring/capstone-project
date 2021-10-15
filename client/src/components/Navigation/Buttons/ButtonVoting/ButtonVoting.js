import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { IconContext } from 'react-icons'

import { IoStar } from 'react-icons/io5'

const ButtonVoting = () => {
  return (
    <NavBarLink to="/voting" activeClassName="is-active">
      <IconContext.Provider value={{ size: '30px' }}>
        <IoStar />
      </IconContext.Provider>
      <span>Voting</span>
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

export default ButtonVoting
