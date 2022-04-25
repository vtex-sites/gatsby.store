import { SessionProvider } from '@faststore/sdk'

import Suggestions from '.'
import type { SuggestionsProps } from '.'

export default {
  component: Suggestions,
  title: 'Organisms/Search/Suggestions',
}

const Template = (props: SuggestionsProps) => (
  <SessionProvider>
    <Suggestions {...props} />
  </SessionProvider>
)

export const Default = Template.bind({})

Default.args = {
  term: 'Son',
}
