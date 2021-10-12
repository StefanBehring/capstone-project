import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders', () => {
    render(<Header />)

    const h1element = screen.getByRole('heading')
    expect(h1element).toBeInTheDocument()
  })
})
