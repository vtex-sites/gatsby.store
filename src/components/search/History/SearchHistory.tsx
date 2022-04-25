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
  const { searchHistory } = useSearchHistory(history)

  return (
    <section className="suggestions__section">
      <div className="suggestions__header">
        <p className="suggestions__title">History</p>
        <Button variant="tertiary" onClick={onClear}>
          Clear
        </Button>
      </div>
      <UIList variant="ordered">
        {searchHistory.map((item, index) => (
          <li key={index} className="suggestions__item">
            <Link
              variant="display"
              to={doSearch(item)}
              target="_blank"
              rel="noreferrer"
            >
              <Icon
                name="Clock"
                width={18}
                height={18}
                className="suggestions__item-icon"
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
