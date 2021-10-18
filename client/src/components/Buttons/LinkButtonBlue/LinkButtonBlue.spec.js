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

    const linkElement = screen.getAllByRole('link')
    expect(linkElement).toHaveLength(1)
  })
})
