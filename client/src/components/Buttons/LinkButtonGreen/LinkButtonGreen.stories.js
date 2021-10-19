import LinkButtonGreen from './LinkButtonGreen'

export default {
  title: 'Component/Buttons/LinkButtonGreen',
  component: LinkButtonGreen,
}

const Template = args => <LinkButtonGreen {...args} />

export const LinkButtonGreenComplete = Template.bind({})
LinkButtonGreenComplete.args = {
  message: 'Register Now',
  direction: '/register',
}
