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
    inverse: {
      control: 'boolean',
      table: { defaultValue: false },
    },
  },
}

const Template = ({ inverse, ...args }: LinkProps) =>
  inverse ? (
    <div style={{ backgroundColor: '#171a1c', padding: '10px' }}>
      <Link inverse {...args}>
        Link Inverse
      </Link>
    </div>
  ) : (
    <Link {...args}>Link</Link>
  )

export const Default = Template.bind({})

Default.args = {
  to: '#',
  variant: 'default',
  inverse: false,
}

export const Display = Template.bind({})

Display.args = {
  to: '#',
  variant: 'display',
  inverse: false,
}

export const Footer = Template.bind({})

Footer.args = {
  to: '#',
  variant: 'footer',
  inverse: false,
}

export const Inline = Template.bind({})

Inline.args = {
  to: '#',
  variant: 'inline',
  inverse: false,
}
