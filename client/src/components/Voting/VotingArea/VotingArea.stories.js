import { action } from '@storybook/addon-actions'
import VotingArea from './VotingArea'

export default {
  title: 'Component/Voting/VotingArea',
  component: VotingArea,
}

const Template = args => <VotingArea {...args} />

export const VotingAreaComplete = Template.bind({})
VotingAreaComplete.args = {
  onVoteClick: action(() => console.log('VOTE')),
  onUnknownMovieClick: action(() => console.log('UNKNOWN')),
  firstMovieTmdbId: '550',
  secondMovieTmdbId: '560',
}
