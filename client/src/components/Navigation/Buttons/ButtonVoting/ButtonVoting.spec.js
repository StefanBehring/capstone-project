import { render, screen } from '@testing-library/react'
import ButtonVoting from './ButtonVoting'

describe('ButtonVoting', () => {
  it('renders', () => {
    render(<ButtonVoting />)

    const text = screen.getByText('Voting')
    expect(text).toBeInTheDocument()
  })
})
