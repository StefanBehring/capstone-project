import HeaderWrapper from '../../styled/HeaderWrapper'
import H1 from '../../styled/H1'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Header = ({ isLoggedIn, isAdmin }) => {
  return (
    <HeaderWrapper>
      <BurgerMenu isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <H1>be objective</H1>
    </HeaderWrapper>
  )
}

export default Header
