import { action } from '@storybook/addon-actions'
import ButtonVoteUp from './ButtonVoteUp'

export default {
  title: 'Component/Voting/Buttons/ButtonVoteUp',
  component: ButtonVoteUp,
}

const Template = args => <ButtonVoteUp {...args} />

export const ButtonVoteUpComplete = Template.bind({})
ButtonVoteUpComplete.args = {
  onVoteClick: action(direction => console.log(direction)),
  direction: 'UP',
}
