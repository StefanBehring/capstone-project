import { render, screen } from '@testing-library/react'
import VotingArea from './VotingArea'

xdescribe('VotingArea', () => {
  it('renders 5 buttons', () => {
    const onVoteClick = jest.fn
    const onUnknownMovieClick = jest.fn
    const firstMovieTmdbId = 550
    const secondMovieTmdbId = 560

    render(
      <VotingArea
        onVoteClick={onVoteClick}
        onUnknownMovieClick={onUnknownMovieClick}
        firstMovieTmdbId={firstMovieTmdbId}
        secondMovieTmdbId={secondMovieTmdbId}
      />
    )

    const buttonElements = screen.getAllByRole('button')
    expect(buttonElements).toHaveLength(5)
  })
})
