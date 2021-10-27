import CardWrapper from '../../../styled/CardWrapper'
import LinkButtonBlue from '../../Buttons/LinkButtonBlue/LinkButtonBlue'

const AdminArea = () => {
  return (
    <CardWrapper>
      <h3>Admin</h3>
      <LinkButtonBlue message="Add New Movie" direction="/add-new-movie" />
      <LinkButtonBlue message="View All Movies" direction="/movie-overview" />
    </CardWrapper>
  )
}

export default AdminArea
