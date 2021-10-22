import Voting from './Voting'

export default {
  title: 'Component/Voting/Voting',
  component: Voting,
}

const Template = args => <Voting {...args} />

export const VotingComplete = Template.bind({})
VotingComplete.args = {
  userData: {
    username: 'John Doe',
    email: 'johndoe@mail.com',
  },
}
