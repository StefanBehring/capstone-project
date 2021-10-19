import ButtonGreen from './ButtonGreen'

export default {
  title: 'Component/Buttons/ButtonGreen',
  component: ButtonGreen,
}

const Template = args => <ButtonGreen {...args} />

export const ButtonGreenComplete = Template.bind({})
ButtonGreenComplete.args = {
  message: 'Add Movie',
}
