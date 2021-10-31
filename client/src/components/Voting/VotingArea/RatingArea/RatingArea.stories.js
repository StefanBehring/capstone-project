import { action } from '@storybook/addon-actions'
import RatingArea from './RatingArea'

export default {
  title: 'Component/Voting/RatingArea',
  component: RatingArea,
}

const Template = args => <RatingArea {...args} />

export const RatingAreaComplete = Template.bind({})
RatingAreaComplete.args = {
  onVoteClick: action(() => console.log('UNKNOWN')),
}
