import CardWrapper from '../../styled/CardWrapper'
import H2 from '../../styled/H2'
import ParagraphCenter from '../../styled/ParagraphCenter'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'

const NotLoggedIn = () => {
  return (
    <CardWrapper>
      <H2>Not logged in</H2>
      <ParagraphCenter>
        In order to view this page you have to be logged in.
      </ParagraphCenter>
      <LinkButtonBlue message="Login" direction="/login" />
      <ParagraphCenter>Don't have an account yet?</ParagraphCenter>
      <LinkButtonBlue message="Register now!" direction="/register" />
    </CardWrapper>
  )
}

export default NotLoggedIn
