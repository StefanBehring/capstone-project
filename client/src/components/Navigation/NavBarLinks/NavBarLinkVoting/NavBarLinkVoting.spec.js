import { render, screen } from '@testing-library/react'
import NavBarLinkVoting from './NavBarLinkVoting'

describe('NavBarLinkVoting', () => {
  it('renders', () => {
    render(<NavBarLinkVoting />)

    const text = screen.getByText('Voting')
    expect(text).toBeInTheDocument()
  })
})
