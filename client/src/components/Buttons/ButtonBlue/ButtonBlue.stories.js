import ButtonBlue from './ButtonBlue'

export default {
  title: 'Component/Buttons/ButtonBlue',
  component: ButtonBlue,
}

const Template = args => <ButtonBlue {...args} />

export const ButtonBlueComplete = Template.bind({})
ButtonBlueComplete.args = {
  message: 'Register Now',
}
