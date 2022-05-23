import { gql } from '@vtex/graphql-utils'
import { List as UIList } from '@faststore/ui'
import { forwardRef, useEffect, useState } from 'react'
import { Badge } from 'src/components/ui/Badge'
import Link from 'src/components/ui/Link'
import type { HTMLAttributes } from 'react'
import type {
  SearchSuggestionsQueryQuery,
  SearchSuggestionsQueryQueryVariables,
} from '@generated/graphql'
import { request } from 'src/sdk/graphql/request'
import { formatSearchPath } from 'src/sdk/search/utils'

const TopSearchQuery = gql`
  query SearchSuggestionsQuery {
    search(first: 5) {
      suggestions {
        terms
      }
    }
  }
`

function useTopSearch(initialTerms: string[] = []) {
  const [topTerms, setTopTerms] =
    useState<SearchSuggestionsQueryQuery['search']['suggestions']['terms']>(
      initialTerms
    )

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    request<SearchSuggestionsQueryQuery, SearchSuggestionsQueryQueryVariables>(
      TopSearchQuery,
      { term: '' }
    )
      .then((data) => {
        setTopTerms(data.search.suggestions.terms)
      })
      .finally(() => setLoading(false))
  }, [])

  return {
    terms: topTerms ?? [],
    loading,
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
  topTerms?: string[]
}

const SuggestionsTopSearch = forwardRef<
  HTMLDivElement,
  SuggestionsTopSearchProps
>(function SuggestionsTopSearch(
  { testId = 'top-search', topTerms, ...otherProps },
  ref
) {
  const { terms, loading } = useTopSearch(topTerms)

  if (loading) {
    return <span>Loading</span>
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
          <li key={term} data-fs-search-suggestion-item>
            <Link variant="display" to={formatSearchPath(term)}>
              <Badge variant="info">{index + 1}</Badge>
              {term}
            </Link>
          </li>
        ))}
      </UIList>
    </section>
  )
})

export default SuggestionsTopSearch
