import { render, screen } from '@testing-library/react'
import MovieCard from './MovieCard'

describe('MovieCard', () => {
  it('renders', () => {
    const title = 'Fight Club'
    const year = '1999'
    const genre = 'Drama'
    render(
      <MovieCard
        title={title}
        year={year}
        genre={genre}
        imgUrl="https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg"
      />
    )

    const h2Element = screen.getByRole('heading', { level: 2 })
    expect(h2Element).toBeInTheDocument()

    const imgElement = screen.getByAltText(title)
    expect(imgElement).toBeInTheDocument()

    const textTitle = screen.getByText(title)
    expect(textTitle).toBeInTheDocument()

    const textParagraph = screen.getByText(`${year} - ${genre}`)
    expect(textParagraph).toBeInTheDocument()
  })
})
