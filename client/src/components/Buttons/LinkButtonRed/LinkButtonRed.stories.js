import LinkButtonRed from './LinkButtonRed'

export default {
  title: 'Component/Buttons/LinkButtonRed',
  component: LinkButtonRed,
}

const Template = args => <LinkButtonRed {...args} />

export const LinkButtonRedComplete = Template.bind({})
LinkButtonRedComplete.args = {
  message: 'Delete',
  direction: '/delete',
}
