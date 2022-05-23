import { List as UIList } from '@faststore/ui'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import Link from 'src/components/ui/Link'
import useSearchHistory from 'src/sdk/search/useSearchHistory'
import { formatSearchPath } from 'src/sdk/search/utils'
import { useSearchInput } from 'src/components/common/SearchInput/SearchInput'

export interface SearchHistoryProps {
  history?: string[]
}

const SearchHistory = ({ history = [] }: SearchHistoryProps) => {
  const { closeSearchInputDropdown } = useSearchInput()
  const { searchHistory, clearSearchHistory } = useSearchHistory(history)

  if (!searchHistory.length) return null

  return (
    <section data-fs-search-suggestion-section>
      <div data-fs-search-suggestion-header>
        <p data-fs-search-suggestion-title>History</p>
        <Button variant="tertiary" onClick={clearSearchHistory}>
          Clear
        </Button>
      </div>
      <UIList variant="ordered">
        {searchHistory.map((item) => (
          <li key={item} data-fs-search-suggestion-item>
            <Link
              variant="display"
              to={formatSearchPath(item)}
              onClick={() => closeSearchInputDropdown?.()}
            >
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
