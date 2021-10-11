import React from 'react'
import Header from './Header'

export default {
  title: 'Component/Header',
  component: Header,
}

const Template = args => <Header {...args} />

export const JustHeader = Template.bind({})
