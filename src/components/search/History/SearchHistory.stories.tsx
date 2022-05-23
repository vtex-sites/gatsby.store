import { SearchInputContext } from 'src/components/common/SearchInput/SearchInput'

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
      <SearchInputContext.Provider value={null}>
        <SearchHistory {...props} />
      </SearchInputContext.Provider>
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
