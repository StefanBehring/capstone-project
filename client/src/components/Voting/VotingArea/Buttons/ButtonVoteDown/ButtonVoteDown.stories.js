import { action } from '@storybook/addon-actions'
import ButtonVoteDown from './ButtonVoteDown'

export default {
  title: 'Component/Voting/Buttons/ButtonVoteDown',
  component: ButtonVoteDown,
}

const Template = args => <ButtonVoteDown {...args} />

export const ButtonVoteDownComplete = Template.bind({})
ButtonVoteDownComplete.args = {
  onVoteClick: action(direction => console.log(direction)),
  direction: 'DOWN',
}
