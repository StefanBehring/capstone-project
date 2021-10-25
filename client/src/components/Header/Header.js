import styled from 'styled-components/macro'
import logo from '../../assets/header-b-objective.svg'
import tmdbLogo from '../../assets/tmdb-logo.svg'

const Header = () => {
  return (
    <Wrapper>
      <h1>be objective</h1>
      <img src={logo} width="240" height="50" alt="" />
      <a
        href="https://www.themoviedb.org/?language=de"
        target="_new"
        aria-label="themoviedb.org"
      >
        <img src={tmdbLogo} width="190" height="81" alt="" />
      </a>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: var(--color-primary-light);
  color: var(--color-black);
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    display: none;
  }

  img {
    margin: 0;
    padding: 0;
    height: 50px;
    width: auto;
  }
`

export default Header
