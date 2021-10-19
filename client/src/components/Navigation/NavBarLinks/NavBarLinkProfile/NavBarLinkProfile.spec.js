import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import NavBarLinkProfile from './NavBarLinkProfile'

describe('NavBarLinkProfile', () => {
  it('renders', () => {
    render(
      <Router>
        <NavBarLinkProfile />
      </Router>
    )

    const text = screen.getByText('Profile')
    expect(text).toBeInTheDocument()
  })
})
