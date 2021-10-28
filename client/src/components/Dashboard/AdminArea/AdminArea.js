import CardWrapper from '../../../styled/CardWrapper'
import H3 from '../../../styled/H3'
import LinkButtonBlue from '../../Buttons/LinkButtonBlue/LinkButtonBlue'

const AdminArea = () => {
  return (
    <CardWrapper>
      <H3>Admin</H3>
      <LinkButtonBlue message="Add New Movie" direction="/add-new-movie" />
      <LinkButtonBlue message="View All Movies" direction="/movie-overview" />
    </CardWrapper>
  )
}

export default AdminArea
