import { render, screen } from '@testing-library/react'

import MovieDetails from './MovieDetails'

xdescribe('MovieDetails', () => {
  it('renders', async () => {
    render(<MovieDetails />)

    const h3Element = await screen.findByRole('heading', { level: 2 })
    expect(h3Element).toBeInTheDocument()

    const imgElement = screen.getByAltText('')
    expect(imgElement).toBeInTheDocument()

    const textTitle = screen.getByText('Jaws: The Revenge')
    expect(textTitle).toBeInTheDocument()

    const textYearGenre = screen.getByText('1987 - Adventure')
    expect(textYearGenre).toBeInTheDocument()

    const textGenre = screen.getByText('Adventure')
    expect(textGenre).toBeInTheDocument()
  })

  it('renders 1 h2 element', async () => {
    render(<MovieDetails />)

    const h3Elements = await screen.findAllByRole('heading', { level: 2 })
    expect(h3Elements).toHaveLength(1)
  })

  it('renders 1 img element', async () => {
    render(<MovieDetails />)

    const imgElements = await screen.findAllByRole('img')
    expect(imgElements).toHaveLength(1)
  })
})
