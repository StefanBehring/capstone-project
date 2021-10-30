import { render, screen } from '@testing-library/react'
import RatingArea from './RatingArea'

describe('RatingArea', () => {
  it('renders', () => {
    render(<RatingArea />)

    const voteUpText = screen.getByText('Upper')
    expect(voteUpText).toBeInTheDocument()

    const voteText = screen.getByText('Vote')
    expect(voteText).toBeInTheDocument()

    const voteDownText = screen.getByText('Below')
    expect(voteDownText).toBeInTheDocument()
  })

  it('renders 2 buttons', () => {
    render(<RatingArea />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(2)
  })
})
