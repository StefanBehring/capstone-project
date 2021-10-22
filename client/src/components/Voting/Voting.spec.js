import { render, screen } from '@testing-library/react'

import Voting from './Voting'

describe('Voting', () => {
  it('renders 5 buttons', async () => {
    const userData = {
      id: '6170461087ebc68671e0058e',
      username: 'JohnDoe6',
      email: 'john6@mail.com',
      unwatchedMovies: ['6166a60b1652fb89412cf888', '6165d5b0a04769af7bdf9ec8'],
    }
    render(<Voting userData={userData} />)

    const buttonElements = await screen.findAllByRole('button')
    expect(buttonElements).toHaveLength(5)
  })

  xit('renders 2 images from the movie cards', async () => {
    const userData = {
      id: '6170461087ebc68671e0058e',
      username: 'JohnDoe6',
      email: 'john6@mail.com',
      unwatchedMovies: ['6166a60b1652fb89412cf888', '6165d5b0a04769af7bdf9ec8'],
    }
    render(<Voting userData={userData} />)

    const imageElements = await screen.findAllByRole('img')
    expect(imageElements).toHaveLength(2)
  })
})
