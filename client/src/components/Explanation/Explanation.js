import styled from 'styled-components/macro'
import CardWrapper from '../../styled/CardWrapper'
import ComponentsWrapper from '../../styled/ComponentsWrapper'
import H2 from '../../styled/H2'
import H3 from '../../styled/H3'
import ParagraphCenter from '../../styled/ParagraphCenter'
import ButtonBack from '../Buttons/ButtonBack/ButtonBack'

const Explanation = () => {
  return (
    <ComponentsWrapper>
      <CardWrapper>
        <H2>Explanation</H2>
        <ParagraphCenter>
          Be objective gives you the opportunity to rate two movies against each
          other. You decide which movie you like more.
        </ParagraphCenter>
        <ParagraphCenter>
          Once you made your decision your vote will give points to the winner
          which are subtracted from the loser. For this we use the elo-rating
          system.
        </ParagraphCenter>
      </CardWrapper>
      <CardWrapper>
        <H3>Voting</H3>
        <ParagraphCenter>The voting looks like this:</ParagraphCenter>
        <ImgVoting
          src="/explanation/voting.png"
          width="348"
          height="582"
          alt="VotingArea"
        />
        <ParagraphCenter>
          On the top and the bottom you can see the movies that are competing
          with each other. In the middle you find the buttons that you can use.
        </ParagraphCenter>
      </CardWrapper>
      <CardWrapper>
        <H3>Unwatched Movies</H3>
        <ParagraphCenter>
          The red buttons on the left side are the 'unwatched' buttons. If you
          haven't watched one or both movies you can click on the corresponding
          button. The app will then save this and won't show the movie again.
        </ParagraphCenter>
        <ParagraphCenter>
          The movie is saved in your 'unwatched' movies list. If you have
          watched the movie now, you can simply go to Dashboard. There you find
          an entry 'Unwatched Movies' in which all movies are listed that you
          haven't watched, yet. On the list you find a button that tells you
          'Watched it!'. If you click it the movie will be removed from your
          'unwatched' movies list and will from there on be displayed within the
          voting.
        </ParagraphCenter>
      </CardWrapper>
      <CardWrapper>
        <H3>The voting buttons</H3>
        <ParagraphCenter>
          On the right side you find the green voting buttons. The button on the
          top is for the upper movie, the button below is for the movie below.
        </ParagraphCenter>
        <ParagraphCenter>
          In this example we have 'Spider-Man' and 'Monsters, Inc.' competing.
          If you think that 'Monsters, Inc.' is the better movie then you would
          click the green button with the arrow that shows downwards.
        </ParagraphCenter>
        <ParagraphCenter>Easy, isn't it?</ParagraphCenter>
        <ButtonBack />
      </CardWrapper>
    </ComponentsWrapper>
  )
}

const ImgVoting = styled.img`
  width: 300px;
  height: auto;
  margin: 0.8rem 0;
`

export default Explanation
