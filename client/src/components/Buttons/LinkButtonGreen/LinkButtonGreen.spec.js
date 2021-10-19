import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import LinkButtonGreen from './LinkButtonGreen'

describe('LinkButtonGreen', () => {
  it('renders', () => {
    render(
      <Router>
        <LinkButtonGreen message="Register now" direction="/register" />
      </Router>
    )

    const linkElement = screen.getAllByRole('link')
    expect(linkElement).toHaveLength(1)
  })
})
