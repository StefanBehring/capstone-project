import { action } from '@storybook/addon-actions'
import LoginForm from './LoginForm'

export default {
  title: 'Component/Formular/LoginForm',
  component: LoginForm,
}

const Template = args => <LoginForm {...args} />

export const LoginFormComplete = Template.bind({})
LoginFormComplete.args = {
  onLogin: action(() => console.log('Login')),
}
