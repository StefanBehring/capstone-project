import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders', () => {
    render(<Footer />)

    const text = screen.getByText('FOOTER')
    expect(text).toBeInTheDocument()
  })
})
