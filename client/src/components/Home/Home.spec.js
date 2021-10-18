import { render, screen } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router'
import Home from './Home'

describe('Home', () => {
  it('renders', () => {
    render(
      <Router>
        <Home />
      </Router>
    )

    const text1 = screen.getByText('Welcome to rate the movie')
    expect(text1).toBeInTheDocument()

    const text2 = screen.getByText(
      'On this app you will have the option to rate movies in a more accurate way than on other rating forms.'
    )
    expect(text2).toBeInTheDocument()

    const text3 = screen.getByText('Have fun!')
    expect(text3).toBeInTheDocument()

    const linkElement = screen.getAllByRole('link')
    expect(linkElement).toHaveLength(1)
  })
})
