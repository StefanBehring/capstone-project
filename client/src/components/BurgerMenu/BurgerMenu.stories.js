import BurgerMenu from './BurgerMenu'

export default {
  title: 'Component/BurgerMenu',
  component: BurgerMenu,
}

const Template = args => <BurgerMenu {...args} />

export const BurgerMenuGuest = Template.bind({})
BurgerMenuGuest.args = {
  isLoggedIn: false,
  isAdmin: false,
}

export const BurgerMenuUser = Template.bind({})
BurgerMenuUser.args = {
  isLoggedIn: true,
  isAdmin: false,
}

export const BurgerMenuAdmin = Template.bind({})
BurgerMenuAdmin.args = {
  isLoggedIn: true,
  isAdmin: true,
}
