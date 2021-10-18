import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import NavBarLinkToplist from './NavBarLinkToplist'

describe('NavBarLinkToplist', () => {
  it('renders', () => {
    render(
      <Router>
        <NavBarLinkToplist />
      </Router>
    )

    const text = screen.getByText('Toplist')
    expect(text).toBeInTheDocument()
  })
})
