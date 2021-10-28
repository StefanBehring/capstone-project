import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { sideBarData } from './sideBarData'
import tmdbLogo from '../../assets/tmdb-logo.svg'
import { IconContext } from 'react-icons'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

const BurgerMenu = ({ isLoggedIn, isAdmin }) => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: '#A396E7' }}>
        <Navbar>
          <SidebarLink to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </SidebarLink>
        </Navbar>
        <NavMenu isActive={sidebar}>
          <NavUlItem onClick={showSidebar}>
            <Toggle>
              <SidebarLink to="#">
                <AiIcons.AiOutlineClose />
              </SidebarLink>
            </Toggle>
            {sideBarData.map(item => {
              let showNavLiItem = true
              if (
                item.showToLoggedIn &&
                item.mustBeLoggedIn &&
                item.mustBeAdmin
              ) {
                if (!isLoggedIn || !isAdmin) {
                  showNavLiItem = false
                }
              }

              if (item.mustBeLoggedIn && !isLoggedIn) {
                showNavLiItem = false
              }

              if (!item.showToLoggedIn && isLoggedIn) {
                showNavLiItem = false
              }

              if (showNavLiItem) {
                return (
                  <NavLiItem key={item.path}>
                    <Link to={item.path}>
                      {item.icon}
                      <Title>{item.title}</Title>
                    </Link>
                  </NavLiItem>
                )
              }
              return <></>
            })}
          </NavUlItem>
          <TmdbLogo>
            <a
              href="https://www.themoviedb.org/?language=de"
              target="_new"
              aria-label="themoviedb.org"
            >
              <img src={tmdbLogo} width="190" height="81" alt="" />
            </a>
          </TmdbLogo>
        </NavMenu>
      </IconContext.Provider>
    </>
  )
}

const Navbar = styled.div`
  background-color: var(--color-primary-heavy);
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
`

const NavMenu = styled.nav`
  background-color: var(--color-primary-heavy);
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;

  ${({ isActive }) =>
    isActive &&
    `
        left: 0;
        transition: 350ms;
    `}
`

const SidebarLink = styled(Link)`
  margin-left: 1.5rem;
  font-size: 1.5rem;
  background: none;
`

const NavUlItem = styled.ul`
  padding-inline-start: 1.5rem;
  width: 100%;
`

const NavLiItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.5rem 0px 0.5rem 1rem;
  list-style: none;
  height: 50px;

  a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 1rem;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 4px;
  }
  a:hover {
    background-color: #1a83ff;
  }
`

const Toggle = styled.li`
  background-color: var(--color-primary-heavy);
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
`

const Title = styled.span`
  margin-left: 1rem;
`

const TmdbLogo = styled.div`
  width: 100%;
  position: absolute;
  bottom: 1rem;
  text-align: center;
`

export default BurgerMenu
