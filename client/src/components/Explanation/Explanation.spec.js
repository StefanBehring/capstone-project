import { render, screen } from '@testing-library/react'
import Explanation from './Explanation'

describe('Home', () => {
  it('renders', () => {
    render(<Explanation />)

    const header2Element = screen.getByRole('heading', { level: 2 })
    expect(header2Element).toBeInTheDocument()

    const header3Elements = screen.getAllByRole('heading', { level: 3 })
    expect(header3Elements).toHaveLength(3)

    const text = screen.getByText('Explanation')
    expect(text).toBeInTheDocument()

    const text2 = screen.getByText(
      'Be objective gives you the opportunity to rate two movies against each other. You decide which movie you like more.'
    )
    expect(text2).toBeInTheDocument()

    const text3 = screen.getByText(
      'Once you made your decision your vote will give points to the winner which are subtracted from the loser. For this we use the elo-rating system.'
    )
    expect(text3).toBeInTheDocument()

    const text4 = screen.getByText('Voting')
    expect(text4).toBeInTheDocument()

    const text5 = screen.getByText('The voting looks like this:')
    expect(text5).toBeInTheDocument()

    const text6 = screen.getByText(
      'On the top and the bottom you can see the movies that are competing with each other. In the middle you find the buttons that you can use.'
    )
    expect(text6).toBeInTheDocument()

    const text7 = screen.getByText(
      "The red buttons on the left side are the 'unwatched' buttons. If you haven't watched one or both movies you can click on the corresponding button. The app will then save this and won't show the movie again."
    )
    expect(text7).toBeInTheDocument()

    const text8 = screen.getByText(
      "The movie is saved in your 'unwatched' movies list. If you have watched the movie now, you can simply go to Dashboard. There you find an entry 'Unwatched Movies' in which all movies are listed that you haven't watched, yet. On the list you find a button that tells you 'Watched it!'. If you click it the movie will be removed from your 'unwatched' movies list and will from there on be displayed within the voting."
    )
    expect(text8).toBeInTheDocument()

    const text9 = screen.getByText(
      'On the right side you find the green voting buttons. The button on the top is for the upper movie, the button below is for the movie below.'
    )
    expect(text9).toBeInTheDocument()

    const text10 = screen.getByText(
      "In this example we have 'Spider-Man' and 'Monsters, Inc.' competing. If you think that 'Monsters, Inc.' is the better movie then you would click the green button with the arrow that shows downwards."
    )
    expect(text10).toBeInTheDocument()

    const text11 = screen.getByText("Easy, isn't it?")
    expect(text11).toBeInTheDocument()

    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders 4 header elements', () => {
    render(<Explanation />)

    const headerElements = screen.getAllByRole('heading')
    expect(headerElements).toHaveLength(4)
  })
})
