import { action } from '@storybook/addon-actions'
import ButtonBothUnknown from './ButtonBothUnknown'

export default {
  title: 'Component/Voting/Buttons/ButtonBothUnknown',
  component: ButtonBothUnknown,
}

const Template = args => <ButtonBothUnknown {...args} />

export const ButtonBothUnknownComplete = Template.bind({})
ButtonBothUnknownComplete.args = {
  onUnknownMovieClick: action(direction => console.log(direction)),
  direction: 'MIDDLE',
}
