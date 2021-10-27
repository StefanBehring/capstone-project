import CardWrapper from '../../styled/CardWrapper'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'

const Home = () => {
  return (
    <CardWrapper>
      <h2>Welcome to rate the movie</h2>
      <p>
        On this app you will have the option to rate movies in a more accurate
        way than on other rating forms.
      </p>
      <p>Have fun!</p>
      <LinkButtonBlue message="Login" direction="/login" />
      <p>Don't have an account yet?</p>
      <LinkButtonBlue message="Register now!" direction="/register" />
    </CardWrapper>
  )
}

export default Home
