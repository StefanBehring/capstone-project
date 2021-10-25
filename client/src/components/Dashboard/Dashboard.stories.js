import Dashboard from './Dashboard'

export default {
  title: 'Component/Dashboard',
  component: Dashboard,
}

const Template = args => <Dashboard {...args} />

export const DashboardIsAdmin = Template.bind({})
DashboardIsAdmin.args = {
  isAdmin: true,
}

export const DashboardIsNotAdmin = Template.bind({})
DashboardIsNotAdmin.args = {
  isAdmin: false,
}
