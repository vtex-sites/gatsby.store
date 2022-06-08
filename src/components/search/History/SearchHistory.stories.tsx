import { SearchInputProvider } from 'src/sdk/search/useSearchInput'

import { SearchHistory } from '.'
import type { SearchHistoryProps } from '.'

export default {
  component: SearchHistory,
  title: 'Organisms/Search/History',
}

const Template = (props: SearchHistoryProps) => {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '0 16px',
        background: 'white',
      }}
    >
      <SearchInputProvider>
        <SearchHistory {...props} />
      </SearchInputProvider>
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  history: ['headphone', 'audio & video', 'mh-7000', 'jbl go'],
}

Default.parameters = {
  backgrounds: { default: 'dark' },
}
