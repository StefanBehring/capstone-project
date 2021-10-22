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

    const h2element = await screen.findByRole('heading', { level: 2 })
    expect(h2element).toBeInTheDocument()

    const headerText = await screen.findByText('Toplist')
    expect(headerText).toBeInTheDocument()
  })
})
