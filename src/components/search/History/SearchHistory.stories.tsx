import { SearchHistory } from '.'
import type { SearchHistoryProps } from '.'

export default {
  component: SearchHistory,
  title: 'Organisms/Search/History',
}

const Template = (props: SearchHistoryProps) => <SearchHistory {...props} />

export const Default = Template.bind({})

Default.args = {
  history: ['headphone', 'audio & video', 'mh-7000', 'jbl go'],
}
