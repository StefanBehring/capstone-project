import EditPasswordForm from './EditPasswordForm'

export default {
  title: 'Component/Profile/EditPasswordForm',
  component: EditPasswordForm,
}

const Template = args => <EditPasswordForm {...args} />

export const EditPasswordFormComplete = Template.bind({})
EditPasswordFormComplete.argTypes = {
  onLogout: { action: 'logout' },
}
