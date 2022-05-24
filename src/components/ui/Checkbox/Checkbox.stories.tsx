import type { CheckboxProps } from '.'
import Checkbox from '.'

const story = {
  component: Checkbox,
  title: 'Atoms/Checkbox',
}

const Template = ({ id, ...args }: CheckboxProps) => (
  <div
    style={{ width: '140px', display: 'flex', justifyContent: 'space-between' }}
  >
    <Checkbox id={id} {...args} />
    <label htmlFor={id}>Checkbox label</label>
  </div>
)

export const Default = Template.bind({})
export const Checked = Template.bind({})
export const Disabled = Template.bind({})
export const Partial = Template.bind({})

Default.args = {
  id: 'checkbox-default',
}

Checked.args = {
  id: 'checkbox-checked',
  checked: true,
  disabled: false,
  partial: false,
}

Disabled.args = {
  id: 'checkbox-disabled',
  disabled: true,
  checked: false,
  partial: false,
}

Partial.args = {
  id: 'checkbox-partial',
  partial: true,
  disabled: false,
  checked: true,
}

export default story
