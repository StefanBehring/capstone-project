import ButtonRed from './ButtonRed'

export default {
  title: 'Component/Buttons/ButtonRed',
  component: ButtonRed,
}

const Template = args => <ButtonRed {...args} />

export const ButtonRedComplete = Template.bind({})
ButtonRedComplete.args = {
  message: 'Delete Movie',
}
