import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter as Router } from 'react-router'
import NavBarLinkToplist from './NavBarLinkToplist'

describe('NavBarLinkToplist', () => {
  it('renders', () => {
    render(
      <Router>
        <NavBarLinkToplist />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
  })

  it('renders only 1 link element', () => {
    render(
      <Router>
        <NavBarLinkToplist />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(1)
  })

  it('renders the text "Toplist" one time', () => {
    render(
      <Router>
        <NavBarLinkToplist />
      </Router>
    )

    const textElements = screen.getAllByText('Toplist')
    expect(textElements).toHaveLength(1)
  })

  it('changes to "is-active" when link is clicked', () => {
    render(
      <Router>
        <NavBarLinkToplist />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    userEvent.click(linkElement)
    expect(linkElement).toHaveClass('is-active')
  })
})
