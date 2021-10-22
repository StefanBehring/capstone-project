import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import LinkButtonRed from './LinkButtonRed'

describe('LinkButtonRed', () => {
  it('renders', () => {
    render(
      <Router>
        <LinkButtonRed message="Delete" direction="/delete" />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toBeInTheDocument()
  })

  it('renders only 1 link element', () => {
    render(
      <Router>
        <LinkButtonRed message="Delete" direction="/delete" />
      </Router>
    )

    const linkElements = screen.getAllByRole('link')
    expect(linkElements).toHaveLength(1)
  })

  it('renders a link with text "Delete"', () => {
    render(
      <Router>
        <LinkButtonRed message="Delete" direction="/delete" />
      </Router>
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveTextContent('Delete')
  })
})
