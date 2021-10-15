import { render, screen } from '@testing-library/react'
import ButtonHome from './ButtonHome'

describe('ButtonHome', () => {
  it('renders', () => {
    render(<ButtonHome />)

    const text = screen.getByText('Home')
    expect(text).toBeInTheDocument()
  })
})
