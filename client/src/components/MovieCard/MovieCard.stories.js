import MovieCard from './MovieCard'

export default {
  title: 'Component/MovieCard',
  component: MovieCard,
}

const Template = args => <MovieCard {...args} />

export const MovieCardComplete = Template.bind({})
MovieCardComplete.args = {
  tmdbId: '550',
}
