import React from 'react'
import MovieCard from './MovieCard'

export default {
  title: 'Component/MovieCard',
  component: MovieCard,
}

const Template = args => <MovieCard {...args} />

export const MovieCardComplete = Template.bind({})
MovieCardComplete.args = {
  title: 'Fight Club',
  year: '1999',
  genre: 'Drama',
  imgUrl: 'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
}

export const MovieCardWithoutImage = Template.bind({})
MovieCardWithoutImage.args = {
  title: 'Fight Club',
  year: '1999',
  genre: 'Drama',
}
