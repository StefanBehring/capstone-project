import { render, screen } from '@testing-library/react'
import MovieOverview from './MovieOverview'

describe('MovieOverview', () => {
  it('renders', async () => {
    render(<MovieOverview />)

    const h2Element = await screen.findByRole('heading', { level: 2 })
    expect(h2Element).toBeInTheDocument()

    const movieCountText = await screen.findByText(/\Moviecount:/)
    expect(movieCountText).toBeInTheDocument()
  })
})
