import { action } from '@storybook/addon-actions'
import UnknownArea from './UnknownArea'

export default {
  title: 'Component/Voting/UnknownArea',
  component: UnknownArea,
}

const Template = args => <UnknownArea {...args} />

export const UnknownAreaComplete = Template.bind({})
UnknownAreaComplete.args = {
  onUnknownMovieClick: action(() => console.log('UNKNOWN')),
  firstMovieTitle: 'Fight Club',
  secondMovieTitle: 'The Big Short',
}
