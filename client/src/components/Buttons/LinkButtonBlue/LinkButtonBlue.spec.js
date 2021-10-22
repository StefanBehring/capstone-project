import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import LinkButtonBlue from './LinkButtonBlue'

describe('LinkButtonBlue', () => {
  it('renders', () => {
    render(
      <Router>
        <LinkButtonBlue message="Register now" direction="/register" />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
  })

  it('renders only 1 link element', () => {
    render(
      <Router>
        <LinkButtonBlue message="Register now" direction="/register" />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(1)
  })

  it('renders a link with text "Register now"', () => {
    render(
      <Router>
        <LinkButtonBlue message="Register now" direction="/register" />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveTextContent('Register now')
  })
})
