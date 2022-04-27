import type { ToggleProps } from '.'
import Toggle from '.'

export default {
  component: Toggle,
  title: 'Atoms/Toggle',
  argTypes: {
    variant: {
      name: 'variant',
      defaultValue: 'horizontal',
    },
  },
}

const Template = ({ ...args }: ToggleProps) => <Toggle {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Label',
}
