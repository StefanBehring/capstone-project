import { render, screen } from '@testing-library/react'
import NavBarLinkHome from './NavBarLinkHome'

describe('NavBarLinkHome', () => {
  it('renders', () => {
    render(<NavBarLinkHome />)

    const text = screen.getByText('Home')
    expect(text).toBeInTheDocument()
  })
})
