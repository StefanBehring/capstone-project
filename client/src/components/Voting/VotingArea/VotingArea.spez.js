import { render, screen } from '@testing-library/react'
import VotingArea from './VotingArea'

describe('VotingArea', () => {
  it('renders 5 buttons', () => {
    render(<VotingArea />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(5)
  })
})
