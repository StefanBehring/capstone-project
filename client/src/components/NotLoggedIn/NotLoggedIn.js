import CardWrapper from '../../styled/CardWrapper'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'

const NotLoggedIn = () => {
  return (
    <CardWrapper>
      <h2>Not logged in</h2>
      <p>In order to view this page you have to be logged in.</p>
      <LinkButtonBlue message="Login" direction="/login" />
      <p>Don't have an account yet?</p>
      <LinkButtonBlue message="Register now!" direction="/register" />
    </CardWrapper>
  )
}

export default NotLoggedIn
