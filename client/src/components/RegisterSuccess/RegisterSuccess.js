import CardWrapper from '../../styled/CardWrapper'
import SuccessCard from '../Messages/SuccessCard/SuccessCard'
import LinkButtonGreen from '../Buttons/LinkButtonGreen/LinkButtonGreen'

const RegisterSuccess = () => {
  return (
    <CardWrapper>
      <h2>Registration</h2>
      <SuccessCard title="Success" message="The registration is completed!" />
      <p>You can now login.</p>
      <LinkButtonGreen message="Login" direction="login" />
    </CardWrapper>
  )
}

export default RegisterSuccess
