import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router'
import NavBarLinkHome from './NavBarLinkHome'

describe('NavBarLinkHome', () => {
  it('renders', () => {
    render(
      <Router>
        <NavBarLinkHome />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
  })

  it('renders only 1 link element', () => {
    render(
      <Router>
        <NavBarLinkHome />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(1)
  })

  it('renders the text "Home" one time', () => {
    render(
      <Router>
        <NavBarLinkHome />
      </Router>
    )

    const textElements = screen.getAllByText('Home')
    expect(textElements).toHaveLength(1)
  })

  it('changes to "is-active" when link is clicked', () => {
    render(
      <Router>
        <NavBarLinkHome />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    userEvent.click(linkElement)
    expect(linkElement).toHaveClass('is-active')
  })
})
