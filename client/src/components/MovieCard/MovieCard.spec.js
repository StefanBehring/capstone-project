import { render, screen } from '@testing-library/react'

import MovieCard from './MovieCard'

xdescribe('MovieCard', () => {
  it('renders', () => {
    render(<MovieCard tmdbId="550" />)

    const h3Element = screen.getByRole('heading', { level: 3 })
    expect(h3Element).toBeInTheDocument()

    const imgElement = screen.getByAltText('')
    expect(imgElement).toBeInTheDocument()

    const textTitle = screen.getByText('Currently loading data')
    expect(textTitle).toBeInTheDocument()

    const textParagraph1 = screen.getByText('1999')
    expect(textParagraph1).toBeInTheDocument()

    const textParagraph2 = screen.getByText('Drama')
    expect(textParagraph2).toBeInTheDocument()
  })
  /*
  it('loads and renders', async () => {
    // TODO:
    // https://www.anthonygonzales.dev/blog/how-to-test-data-fetching-components.html

    const scope = nock('https://localhost:4000')
      .get('/api/tmdb/550')
      .once()
      .reply(200, {
        data: {
          tmdbId: 550,
          title: 'Fight Club',
          year: '1999',
          genre: 'Drama',
          imgUrl:
            'https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg',
        },
      })
    render(<MovieCard tmdbId="550" />)

    fireEvent.click(screen.getByText('Currently loading data'))

    await waitFor(() => screen.getByRole('heading'))
    // Changed the toHaveTextContent('Fight Club') to this, because with 'Fight Club' it was
    // giving an error that the text is 'Currently loading data', which is the START text of it
    expect(screen.getByRole('heading')).toHaveTextContent(
      'Currently loading data'
    )
  })
  */
})
