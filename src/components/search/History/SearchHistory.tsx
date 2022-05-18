import { formatSearchState, initSearchState } from '@faststore/sdk'
import { List as UIList } from '@faststore/ui'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import Link from 'src/components/ui/Link'
import useSearchHistory from 'src/sdk/search/useSearchHistory'

export interface SearchHistoryProps {
  history?: string[]
  onClear: () => void
}

const doSearch = (term: string) => {
  const { pathname, search } = formatSearchState(
    initSearchState({
      term,
      base: '/s',
    })
  )

  return `${pathname}${search}`
}

const SearchHistory = ({ history = [], onClear }: SearchHistoryProps) => {
  const { searchHistory, clearSearchHistory } = useSearchHistory(history)
  const onClearClick = () => {
    clearSearchHistory()
    onClear()
  }

  if (!searchHistory.length) return null

  return (
    <section data-fs-search-suggestion-section>
      <div data-fs-search-suggestion-header>
        <p data-fs-search-suggestion-title>History</p>
        <Button variant="tertiary" onClick={onClearClick}>
          Clear
        </Button>
      </div>
      <UIList variant="ordered">
        {searchHistory.map((item) => (
          <li key={item} data-fs-search-suggestion-item>
            <Link variant="display" to={doSearch(item)}>
              <Icon
                name="Clock"
                width={18}
                height={18}
                data-fs-search-suggestion-item-icon
              />
              {item}
            </Link>
          </li>
        ))}
      </UIList>
    </section>
  )
}

export default SearchHistory
