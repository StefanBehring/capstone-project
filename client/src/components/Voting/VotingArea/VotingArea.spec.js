import { render, screen } from '@testing-library/react'
import VotingArea from './VotingArea'

describe('VotingArea', () => {
  it('renders 5 buttons', async () => {
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

    const buttonElements = await screen.findAllByRole('button')
    expect(buttonElements).toHaveLength(5)
  })
})
