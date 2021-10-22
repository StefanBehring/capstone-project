import Profile from './Profile'

export default {
  title: 'Component/Profile',
  component: Profile,
}

const Template = args => <Profile {...args} />

export const ProfileComplete = Template.bind({})
ProfileComplete.args = {
  userData: {
    username: 'John Doe',
    email: 'johndoe@mail.com',
  },
}
