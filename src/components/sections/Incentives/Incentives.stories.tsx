// import type { IncentivesProps } from '.'
import Incentives from '.'

export default {
  component: Incentives,
  title: 'Molecules/Incentives',
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
  },
}

// const Template = ({ incentives, ...args }: IncentivesProps) =>
//   incentives ? (
//     <div style={{ backgroundColor: '#171a1c', padding: '10px' }}>
//       <Incentives incentives={} {...args}>
//         Link Inverse
//       </Link>
//     </div>
//   ) : (
//     <Link {...args}>Link</Link>
//   )

// export const Default = Template.bind({})

// Default.args = {
//   to: '#',
//   variant: 'default',
//   inverse: false,
// }

// export const Display = Template.bind({})

// Display.args = {
//   to: '#',
//   variant: 'display',
//   inverse: false,
// }

// export const Footer = Template.bind({})

// Footer.args = {
//   to: '#',
//   variant: 'footer',
//   inverse: false,
// }

// export const Inline = Template.bind({})

// Inline.args = {
//   to: '#',
//   variant: 'inline',
//   inverse: false,
// }
