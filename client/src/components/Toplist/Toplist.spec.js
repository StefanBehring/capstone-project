import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import Toplist from './Toplist'

describe('Toplist', () => {
  it('renders', async () => {
    render(
      <Router>
        <Toplist />
      </Router>
    )

    const h2elements = await screen.findAllByRole('heading', { level: 2 })
    expect(h2elements).toHaveLength(1)
  })
})
