import React from 'react'
import SuccessCard from './SuccessCard'

export default {
  title: 'Component/Messages/SuccessCard',
  component: SuccessCard,
}

const Template = args => <SuccessCard {...args} />

export const SuccessCardComplete = Template.bind({})
SuccessCardComplete.args = {
  title: 'Success!',
  message: 'This is an success message',
}
