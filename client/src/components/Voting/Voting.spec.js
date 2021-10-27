import { render, screen } from '@testing-library/react'

import Voting from './Voting'

describe('Voting', () => {
  xit('renders 5 buttons', async () => {
    render(<Voting />)

    const buttonElements = await screen.findAllByRole('button')
    expect(buttonElements).toHaveLength(5)
  })

  xit('renders 2 images from the movie cards', async () => {
    render(<Voting />)
    screen.debug()

    const imageElements = await screen.findAllByRole('img')
    expect(imageElements).toHaveLength(2)
  })
})
