import CardWrapper from '../../styled/CardWrapper'
import H2 from '../../styled/H2'
import ParagraphCenter from '../../styled/ParagraphCenter'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'

const Home = () => {
  return (
    <CardWrapper>
      <H2>Welcome to rate the movie</H2>
      <ParagraphCenter>
        On this app you will have the option to rate movies in a more accurate
        way than on other rating forms.
      </ParagraphCenter>
      <ParagraphCenter>Have fun!</ParagraphCenter>
      <LinkButtonBlue message="Login" direction="/login" />
      <ParagraphCenter>Don't have an account yet?</ParagraphCenter>
      <LinkButtonBlue message="Register now!" direction="/register" />
    </CardWrapper>
  )
}

export default Home
