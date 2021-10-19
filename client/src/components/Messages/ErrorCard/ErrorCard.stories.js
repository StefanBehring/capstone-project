import ErrorCard from './ErrorCard'

export default {
  title: 'Component/Messages/ErrorCard',
  component: ErrorCard,
}

const Template = args => <ErrorCard {...args} />

export const ErrorCardComplete = Template.bind({})
ErrorCardComplete.args = {
  title: 'Error!',
  message: 'This is an error message',
}
