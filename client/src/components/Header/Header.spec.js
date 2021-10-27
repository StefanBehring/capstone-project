import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders', () => {
    render(<Header />)

    const h1element = screen.getByRole('heading', { level: 1 })
    expect(h1element).toBeInTheDocument()
  })

  it('renders only 1 heading', () => {
    render(<Header />)

    const headingElements = screen.getAllByRole('heading')
    expect(headingElements).toHaveLength(1)
  })

  it('renders the main logo', () => {
    render(<Header />)

    const imgElement = screen.getByAltText('be objective')
    expect(imgElement).toBeInTheDocument()
  })

  it('renders exactly two images', () => {
    render(<Header />)

    const imgElements = screen.getAllByRole('img')
    expect(imgElements).toHaveLength(2)
  })
})
