import type { SelectProps } from '.'
import Select from '.'

export default {
  component: Select,
  title: 'Atoms/Select',
}

const Template = ({ ...args }: SelectProps) => <Select {...args} />

export const Default = Template.bind({})

Default.args = {
  id: 'select',
  options: {
    name_asc: 'Name, A-Z',
    name_desc: 'Name, Z-A',
  },
  label: 'Label',
  disabled: false,
}
