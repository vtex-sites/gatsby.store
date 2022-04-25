import { SuggestionsTopSearch } from '.'
import type { SuggestionsTopSearchProps } from '.'

export default {
  component: SuggestionsTopSearch,
  title: 'Organisms/Search/TopSearch',
}

const Template = (props: SuggestionsTopSearchProps) => (
  <SuggestionsTopSearch {...props} />
)

export const Default = Template.bind({})

Default.args = {
  searchedItems: [
    { name: 'Office Supplies', href: '/office-supplies' },
    { name: 'Headphones', href: '/headphones' },
    { name: 'Notebooks', href: '/notebooks' },
    { name: 'Laser Printer', href: '/laser-printer' },
    { name: 'Bluetooth Keyboard', href: '/bluetooth-keyboard' },
  ],
}
