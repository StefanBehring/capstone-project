import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders', () => {
    render(<Header />)

    const text = screen.getByText('Rate The Movie')
    expect(text).toBeInTheDocument()
  })
})
