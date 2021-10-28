import CardWrapper from '../../styled/CardWrapper'
import H2 from '../../styled/H2'
import ParagraphCenter from '../../styled/ParagraphCenter'
import SuccessCard from '../Messages/SuccessCard/SuccessCard'
import LinkButtonGreen from '../Buttons/LinkButtonGreen/LinkButtonGreen'

const RegisterSuccess = () => {
  return (
    <CardWrapper>
      <H2>Registration</H2>
      <SuccessCard title="Success" message="The registration is completed!" />
      <ParagraphCenter>You can now login.</ParagraphCenter>
      <LinkButtonGreen message="Login" direction="login" />
    </CardWrapper>
  )
}

export default RegisterSuccess
