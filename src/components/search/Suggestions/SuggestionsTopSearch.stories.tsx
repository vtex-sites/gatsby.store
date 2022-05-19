import { SuggestionsTopSearch } from '.'
import type { SuggestionsTopSearchProps } from '.'

export default {
  component: SuggestionsTopSearch,
  title: 'Organisms/Search/TopSearch',
}

const Template = (props: SuggestionsTopSearchProps) => (
  <div
    style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '0 16px',
      background: 'white',
    }}
  >
    <SuggestionsTopSearch {...props} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  topTerms: [
    'Office Supplies',
    'Headphones',
    'Notebooks',
    'Laser Printer',
    'Bluetooth Keyboard',
  ],
}

Default.parameters = {
  backgrounds: { default: 'dark' },
}
