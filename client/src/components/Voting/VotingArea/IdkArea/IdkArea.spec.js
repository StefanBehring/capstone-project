import { render, screen } from '@testing-library/react'
import IdkArea from './IdkArea'

describe('IdkArea', () => {
  it('renders texts', () => {
    render(<IdkArea />)

    const unknownMovieTexts = screen.getAllByText(/Haven't Watched/)
    expect(unknownMovieTexts).toHaveLength(2)

    const bothUnknownText = screen.getByText('Both Not Watched')
    expect(bothUnknownText).toBeInTheDocument()
  })

  it('renders 3 buttons', () => {
    render(<IdkArea />)

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(3)
  })
})
