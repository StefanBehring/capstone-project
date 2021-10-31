import CardWrapper from '../../styled/CardWrapper'
import H2 from '../../styled/H2'
import ParagraphCenter from '../../styled/ParagraphCenter'
import LinkButtonBlue from '../Buttons/LinkButtonBlue/LinkButtonBlue'

const Home = () => {
  return (
    <CardWrapper>
      <H2>Welcome!</H2>
      <ParagraphCenter>
        On this app you will have the option to rate movies.
      </ParagraphCenter>
      <ParagraphCenter>
        You don't do it in the typical 5-star fashion way. You decide which
        movie you like more!
      </ParagraphCenter>
      <ParagraphCenter>
        This way we get a way better understanding of which one really is the
        best movie.
      </ParagraphCenter>
      <ParagraphCenter>Have fun!</ParagraphCenter>
      <LinkButtonBlue message="Login" direction="/login" />
      <ParagraphCenter>Don't have an account yet?</ParagraphCenter>
      <LinkButtonBlue message="Register now!" direction="/register" />
    </CardWrapper>
  )
}

export default Home
