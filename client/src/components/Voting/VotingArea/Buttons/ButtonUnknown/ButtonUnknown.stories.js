import { action } from '@storybook/addon-actions'
import ButtonUnknown from './ButtonUnknown'

export default {
  title: 'Component/Voting/Buttons/ButtonUnknown',
  component: ButtonUnknown,
}

const Template = args => <ButtonUnknown {...args} />

export const ButtonUnknownComplete = Template.bind({})
ButtonUnknownComplete.args = {
  onUnknownMovieClick: action(direction => console.log(direction)),
  direction: 'UP',
}
