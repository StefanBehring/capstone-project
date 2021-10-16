import { render, screen } from '@testing-library/react'
import UnknownArea from './UnknownArea'

describe('IdkArea', () => {
  it('renders texts', () => {
    render(<UnknownArea />)

    const unknownMovieTexts = screen.getAllByText(/Haven't Watched/)
    expect(unknownMovieTexts).toHaveLength(2)

    const bothUnknownText = screen.getByText('Both Not Watched')
    expect(bothUnknownText).toBeInTheDocument()
  })

  it('renders 3 buttons', () => {
    render(<UnknownArea />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(3)
  })
})
