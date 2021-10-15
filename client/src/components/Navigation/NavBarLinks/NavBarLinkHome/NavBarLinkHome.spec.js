import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import NavBarLinkHome from './NavBarLinkHome'

describe('NavBarLinkHome', () => {
  it('renders', () => {
    render(
      <Router>
        <NavBarLinkHome />
      </Router>
    )

    const text = screen.getByText('Home')
    expect(text).toBeInTheDocument()
  })
})
