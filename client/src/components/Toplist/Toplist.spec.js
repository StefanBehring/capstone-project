import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import Toplist from './Toplist'

xdescribe('Toplist', () => {
  it('renders', () => {
    render(
      <Router>
        <Toplist />
      </Router>
    )

    const h2elements = screen.getAllByRole('heading', { level: 2 })
    expect(h2elements).toHaveLength(1)
  })
})
