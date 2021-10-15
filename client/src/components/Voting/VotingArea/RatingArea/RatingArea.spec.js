import { render, screen } from '@testing-library/react'
import RatingArea from './RatingArea'

describe('RatingArea', () => {
  it('renders texts', () => {
    render(<RatingArea />)

    const voteUpText = screen.getByText('Vote Up')
    expect(voteUpText).toBeInTheDocument()

    const voteDownText = screen.getByText('Vote Down')
    expect(voteDownText).toBeInTheDocument()
  })

  it('renders 2 buttons', () => {
    render(<RatingArea />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(2)
  })
})
