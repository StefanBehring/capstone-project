import LinkButtonBlue from './LinkButtonBlue'

export default {
  title: 'Component/Buttons/LinkButtonBlue',
  component: LinkButtonBlue,
}

const Template = args => <LinkButtonBlue {...args} />

export const LinkButtonBlueComplete = Template.bind({})
LinkButtonBlueComplete.args = {
  message: 'Register Now',
  direction: '/register',
}
