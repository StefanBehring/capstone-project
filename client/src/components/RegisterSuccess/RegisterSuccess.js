import styled from 'styled-components/macro'
import SuccessCard from '../Messages/SuccessCard/SuccessCard'
import LinkButtonGreen from '../Buttons/LinkButtonGreen/LinkButtonGreen'

const RegisterSuccess = () => {
  return (
    <div>
      <Wrapper>
        <h2>Registration</h2>
        <SuccessCard title="Success" message="The registration is completed!" />
        <p>You can now login.</p>
        <LinkButtonGreen message="Login" direction="login" />
      </Wrapper>
    </div>
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
`

export default RegisterSuccess
