import HeaderWrapper from '../../styled/HeaderWrapper'
import logo from '../../assets/header-b-objective.svg'
// import tmdbLogo from '../../assets/tmdb-logo.svg'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Header = ({ isLoggedIn, isAdmin }) => {
  return (
    <HeaderWrapper>
      <BurgerMenu isLoggedIn={isLoggedIn} isAdmin={isAdmin} />
      <h1>
        <img src={logo} width="240" height="50" alt="be objective" />
      </h1>
    </HeaderWrapper>
  )
}

/*
<a
  href="https://www.themoviedb.org/?language=de"
  target="_new"
  aria-label="themoviedb.org"
>
  <img src={tmdbLogo} width="190" height="81" alt="" />
</a>
*/

export default Header
