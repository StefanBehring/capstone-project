import styled from 'styled-components/macro'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'
import LinkButtonGreen from '../Buttons/LinkButtonGreen/LinkButtonGreen'
import LinkButtonRed from '../Buttons/LinkButtonRed/LinkButtonRed'

const Profile = () => {
  return (
    <Wrapper>
      <h2>Profile</h2>
      <p>JohnDoe</p>
      <p>johndoe@mail.com</p>
      <Links>
        <LinkButtonBlue direction="/" message="Change Password" />
        <LinkButtonGreen direction="/" message="Logout" />
        <LinkButtonRed direction="/" message="Delete Account" />
      </Links>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--color-white-light);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--color-black);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 340px;

  p {
    margin: 0 auto 0.5rem;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
`

export default Profile
