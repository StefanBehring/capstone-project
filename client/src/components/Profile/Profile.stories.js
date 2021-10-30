import { action } from '@storybook/addon-actions'
import Profile from './Profile'

export default {
  title: 'Component/Profile',
  component: Profile,
}

const Template = args => <Profile {...args} />

export const ProfileComplete = Template.bind({})
ProfileComplete.args = {
  onLogout: action(() => console.log('Logout')),
}
