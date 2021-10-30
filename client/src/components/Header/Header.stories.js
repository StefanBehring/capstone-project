import Header from './Header'

export default {
  title: 'Component/Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const HeaderGuest = Template.bind({})
HeaderGuest.args = {
  isLoggedIn: false,
  isAdmin: false,
}

export const HeaderUser = Template.bind({})
HeaderUser.args = {
  isLoggedIn: true,
  isAdmin: false,
}

export const HeaderAdmin = Template.bind({})
HeaderAdmin.args = {
  isLoggedIn: true,
  isAdmin: true,
}
