import React from 'react'
import ErrorCard from './ErrorCard'

export default {
  title: 'Component/ErrorCard',
  component: ErrorCard,
}

const Template = args => <ErrorCard {...args} />

export const ErrorCardComplete = Template.bind({})
ErrorCardComplete.args = {
  title: 'Title!',
  message: 'This is a message',
}
