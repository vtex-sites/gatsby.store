import type { Story } from '@storybook/react'

import type { ToggleProps } from '.'
import Toggle from '.'
import mdx from './Toggle.mdx'

export default {
  component: Toggle,
  title: 'Atoms/Toggle',
  argTypes: {
    displayLabel: {
      type: {
        name: 'boolean',
        required: false,
      },
    },
    disabled: {
      type: {
        name: 'boolean',
      },
      defaultValue: false,
    },
    variant: {
      name: 'variant',
      defaultValue: 'horizontal',
    },
  },
  parameters: {
    docs: {
      page: mdx,
    },
  },
}

const Template: Story<ToggleProps> = ({ ...args }) => <Toggle {...args} />

export const Horizontal = Template.bind({})
export const Vertical = Template.bind({})
export const Checked = Template.bind({})
export const Disabled = Template.bind({})
export const DisabledChecked = Template.bind({})

Horizontal.args = {
  id: 'toggle-horizontal',
  label: 'Label',
}

Vertical.args = {
  id: 'toggle-vertical',
  label: 'Label',
  variant: 'vertical',
}

Checked.args = {
  id: 'toggle-vertical',
  label: 'Label',
  checked: true,
}

Disabled.args = {
  id: 'toggle-vertical',
  label: 'Label',
  disabled: true,
}

DisabledChecked.args = {
  id: 'toggle-vertical',
  label: 'Label',
  checked: true,
  disabled: true,
}
