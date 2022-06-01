import { useSession } from '@faststore/sdk'
import { List as UIList } from '@faststore/ui'
import { gql } from '@vtex/graphql-utils'
import { forwardRef } from 'react'
import { Badge } from 'src/components/ui/Badge'
import Link from 'src/components/ui/Link'
import { useQuery } from 'src/sdk/graphql/useQuery'
import useSearchInput, { formatSearchPath } from 'src/sdk/search/useSearchInput'
import type { HTMLAttributes } from 'react'
import type {
  StoreSuggestionTerm,
  SearchSuggestionsQueryQuery as Query,
  SearchSuggestionsQueryQueryVariables as Variables,
} from '@generated/graphql'

const MAX_TOP_SEARCH_TERMS = 5

const query = gql`
  query SearchSuggestionsQuery {
    search {
      suggestions {
        terms
      }
    }
  }
`

function useTopSearch(
  initialTerms: StoreSuggestionTerm[] = [],
  limit: number = MAX_TOP_SEARCH_TERMS
) {
  const { channel, locale } = useSession()

  const { data, error } = useQuery<Query, Variables>(query, {
    term: '',
    selectedFacets: [
      { key: 'channel', value: channel ?? '' },
      { key: 'locale', value: locale },
    ],
  })

  return {
    terms: (data?.search.suggestions.terms ?? initialTerms).slice(0, limit),
    isLoading: !error && !data,
  }
}

export interface SuggestionsTopSearchProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * ID to find this component in testing tools (e.g.: cypress, testing library, and jest).
   */
  testId?: string
  /**
   * List of top searched items
   */
  topTerms?: StoreSuggestionTerm[]
}

const SuggestionsTopSearch = forwardRef<
  HTMLDivElement,
  SuggestionsTopSearchProps
>(function SuggestionsTopSearch(
  { testId = 'top-search', topTerms, ...otherProps },
  ref
) {
  const { onSearchInputSelection } = useSearchInput()
  const { terms, isLoading } = useTopSearch(topTerms)

  if (isLoading) {
    return <p data-fs-search-input-loading-text>Loading...</p>
  }

  return (
    <section
      ref={ref}
      data-testid={testId}
      data-fs-search-suggestion-section
      {...otherProps}
    >
      <div data-fs-search-suggestion-header>
        <p data-fs-search-suggestion-title>Top Search</p>
      </div>
      <UIList variant="ordered">
        {terms.map((term, index) => (
          <li key={term.value} data-fs-search-suggestion-item>
            <Link
              variant="display"
              to={formatSearchPath(term.value)}
              onClick={() =>
                onSearchInputSelection?.(
                  term.value,
                  formatSearchPath(term.value)
                )
              }
            >
              <Badge variant="info">{index + 1}</Badge>
              {term.value}
            </Link>
          </li>
        ))}
      </UIList>
    </section>
  )
})

export default SuggestionsTopSearch
