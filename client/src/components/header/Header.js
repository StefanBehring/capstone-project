import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <h1>Rate The Movie</h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Header
