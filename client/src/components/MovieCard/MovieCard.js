import styled from 'styled-components/macro'

const MovieCard = ({ imgUrl, title, year, genre }) => {
  return (
    <Wrapper>
      <img src={imgUrl} alt={title} height="562" width="375" />
      <h2>{title}</h2>
      <p>
        {year} - {genre}
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--color-yellow);
  border: 2px solid var(--color-lila);
  border-radius: 10px;
  color: #000;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 0.5rem auto;
  padding: 0.5rem;
  width: 340px;

  img {
    height: 200px;
    width: 133px;
  }

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`

export default MovieCard
