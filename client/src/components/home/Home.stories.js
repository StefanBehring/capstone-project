import React from 'react'
import Home from './Home'

export default {
  title: 'Component/Home',
  component: Home,
}

const Template = args => <Home {...args} />

export const JustHome = Template.bind({})
