import styled from 'styled-components/macro'

const MovieCard = ({ imgUrl, title, year, genre }) => {
  return (
    <Wrapper>
      <img src={imgUrl} alt={title} height="562" width="375" />
      <h3>{title}</h3>
      <p>
        {year} - {genre}
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--color-yellow);
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

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`

export default MovieCard
