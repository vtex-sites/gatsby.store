import { create } from '@storybook/theming/create'
import Logo from '../static/BaseStore.svg'

export default create({
  base: 'light',

  colorPrimary: '#00419e',
  colorSecondary: '#00419e',

  // UI
  appBg: 'white',
  appContentBg: 'white',
  appBorderRadius: 6,

  // Typography
  fontBase: '"Lato", -apple-system, system-ui, BlinkMacSystemFont, sans-serif',

  brandTitle: `BaseStore UI`,
  brandUrl: 'https://github.com/vtex-sites/gatsby.store',
  brandImage: Logo,
})
