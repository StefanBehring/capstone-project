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
  })

  it('renders 1 header element', async () => {
    render(
      <Router>
        <Toplist />
      </Router>
    )

    const headerElements = await screen.findAllByRole('heading', { level: 2 })
    expect(headerElements).toHaveLength(1)
  })

  it('renders "Toplist" in the header element', async () => {
    render(
      <Router>
        <Toplist />
      </Router>
    )

    const headerElement = await screen.findByRole('heading', { level: 2 })
    expect(headerElement).toHaveTextContent('Toplist')
  })
})
