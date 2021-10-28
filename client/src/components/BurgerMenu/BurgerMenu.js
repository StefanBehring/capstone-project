import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

const BurgerMenu = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
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
            {SidebarData.map((item, index) => {
              return (
                <NavLiItem key={index}>
                  <Link to={item.path}>
                    {item.icon}
                    <Title>{item.title}</Title>
                  </Link>
                </NavLiItem>
              )
            })}
          </NavUlItem>
        </NavMenu>
      </IconContext.Provider>
    </>
  )
}

const Navbar = styled.div`
  background-color: #060b26;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
`

const NavMenu = styled.nav`
  background-color: #060b26;
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
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
`

const NavUlItem = styled.ul`
  width: 100%;
`

const NavLiItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 50px;

  a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
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
  background-color: #060b26;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: start;
  align-items: center;
`

const Title = styled.span`
  margin-left: 1rem;
`

export default BurgerMenu
