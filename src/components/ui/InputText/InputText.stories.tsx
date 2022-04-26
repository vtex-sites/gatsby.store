import type { InputTextProps } from '.'
import InputText from '.'

export default {
  component: InputText,
  title: 'Atom/InputText',
}

const Template = ({ ...args }: InputTextProps) => (
  <div style={{ width: 400 }}>
    <InputText {...args} />
  </div>
)

export const Default = Template.bind({})
export const HasError = Template.bind({})
export const Interactive = Template.bind({})

Default.args = {
  id: 'default-input-text',
  label: 'Email',
  errorMessage: 'Please, add a valid email',
}

HasError.args = {
  id: 'error-input-text',
  label: 'Email',
  value: 'invalid@mail',
  errorMessage: 'Please, add a valid email',
}

Interactive.args = {
  id: 'interactive-input-text',
  label: 'Postal Code',
  actionable: true,
  errorMessage: 'Invalid Postal Code',
}
