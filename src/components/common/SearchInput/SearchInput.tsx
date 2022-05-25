import { sendAnalyticsEvent } from '@faststore/sdk'
import { SearchInput as UISearchInput } from '@faststore/ui'
import { navigate } from 'gatsby'
import {
  createContext,
  forwardRef,
  lazy,
  Suspense,
  useContext,
  useRef,
  useState,
} from 'react'
import Icon from 'src/components/ui/Icon'
import useSearchHistory from 'src/sdk/search/useSearchHistory'
import { formatSearchPath } from 'src/sdk/search/utils'
import useOnClickOutside from 'src/sdk/ui/useOnClickOutside'
import type { SearchEvent } from '@faststore/sdk'
import type {
  SearchInputProps as UISearchInputProps,
  SearchInputRef,
} from '@faststore/ui'

const Suggestions = lazy(() => import('src/components/search/Suggestions'))

interface SearchInputContextValue {
  onSearchInputSelection?: (term: string) => void
}

export const SearchInputContext = createContext<SearchInputContextValue | null>(
  null
)

export const useSearchInput = () => {
  const context = useContext(SearchInputContext)

  if (context === null) {
    throw new Error('Do not outside the SearchInputContext context.')
  }

  return context
}

declare type SearchInputProps = {
  onSearchClick?: () => void
  buttonTestId?: string
} & Omit<UISearchInputProps, 'onSubmit'>

const sendAnalytics = async (term: string) => {
  sendAnalyticsEvent<SearchEvent>({
    name: 'search',
    params: { search_term: term },
  })
}

const SearchInput = forwardRef<SearchInputRef, SearchInputProps>(
  function SearchInput(
    { onSearchClick, buttonTestId = 'store-search-button', ...props },
    ref
  ) {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [suggestionsOpen, setSuggestionsOpen] = useState<boolean>(false)
    const searchRef = useRef<HTMLDivElement>(null)
    const { addToSearchHistory } = useSearchHistory()

    const onSearchInputSelection = (term: string) => {
      addToSearchHistory(term)
      sendAnalytics(term)
      setSuggestionsOpen(false)
      setSearchQuery(term)
    }

    useOnClickOutside(searchRef, () => setSuggestionsOpen(false))

    return (
      <div
        ref={searchRef}
        data-store-search-input-wrapper
        data-store-search-input-dropdown-open={suggestionsOpen}
      >
        <SearchInputContext.Provider value={{ onSearchInputSelection }}>
          <UISearchInput
            ref={ref}
            icon={
              <Icon
                name="MagnifyingGlass"
                onClick={onSearchClick}
                data-testid={buttonTestId}
              />
            }
            placeholder="Search everything at the store"
            onChange={(e) => setSearchQuery(e.target.value)}
            onSubmit={(term) => {
              onSearchInputSelection(term)
              navigate(formatSearchPath(term))
            }}
            onFocus={() => setSuggestionsOpen(true)}
            value={searchQuery}
            {...props}
          />
          {suggestionsOpen && (
            <Suspense fallback={null}>
              <div data-store-search-input-dropdown-wrapper>
                <Suggestions term={searchQuery} />
              </div>
            </Suspense>
          )}
        </SearchInputContext.Provider>
      </div>
    )
  }
)

export default SearchInput
