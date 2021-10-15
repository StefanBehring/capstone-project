import { render, screen } from '@testing-library/react'
import Voting from './Voting'

describe('Voting', () => {
  it('renders 5 buttons', () => {
    render(<Voting />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(5)
  })

  it('renders 2 images from the movie cards', () => {
    render(<Voting />)

    const imageElements = screen.getAllByAltText('')
    expect(imageElements).toHaveLength(2)
  })
})
