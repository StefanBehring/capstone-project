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

    const linkElement = screen.getAllByRole('link')
    expect(linkElement).toHaveLength(1)
  })
})
