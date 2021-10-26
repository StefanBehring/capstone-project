import styled from 'styled-components/macro'
import LinkButtonBlue from '../../Buttons/LinkButtonBlue/LinkButtonBlue'

const AdminArea = () => {
  return (
    <Wrapper>
      <h3>Admin</h3>
      <LinkButtonBlue message="Add New Movie" direction="/add-new-movie" />
      <LinkButtonBlue message="View All Movies" direction="/movie-overview" />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: var(--color-white-light);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: var(--color-black);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 1rem;
  padding: 0.5rem;
  width: 340px;
`

export default AdminArea
