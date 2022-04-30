import type { LinkProps } from '.'
import Link from '.'

export default {
  component: Link,
  title: 'Atoms/Link',
  argTypes: {
    to: {
      type: { name: 'string', required: true },
    },
    ref: {
      table: {
        disable: true,
      },
    },
    as: {
      table: {
        disable: true,
      },
    },
  },
}

const Template = ({ ...args }: LinkProps) => <Link {...args}>Link</Link>

export const Default = Template.bind({})

Default.args = {
  to: '#',
  variant: 'default',
  inverse: false,
}
