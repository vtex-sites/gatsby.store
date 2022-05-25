import { gql } from '@vtex/graphql-utils'
import { useEffect, useState } from 'react'
import UISuggestions from 'src/components/ui/Search/Suggestions'
import { request } from 'src/sdk/graphql/request'
import type {
  SearchSuggestionsQueryQuery,
  SearchSuggestionsQueryQueryVariables,
} from '@generated/graphql'
import type { SuggestionsProps } from 'src/components/ui/Search/Suggestions'

import { SearchHistory } from '../History'
import SuggestionsTopSearch from './SuggestionsTopSearch'

const MAX_SUGGESTIONS = 5

const SearchSuggestionsQuery = gql`
  query SearchSuggestionsQuery($term: String!) {
    search(first: 10, term: $term) {
      suggestions {
        terms
        products {
          ...ProductSummary_product
        }
      }
    }
  }
`

function useSuggestions(term: string, limit: number = MAX_SUGGESTIONS) {
  const [suggestions, setSuggestions] =
    useState<SearchSuggestionsQueryQuery['search']['suggestions']>()

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (term.length > 0) {
      setLoading(true)
      request<
        SearchSuggestionsQueryQuery,
        SearchSuggestionsQueryQueryVariables
      >(SearchSuggestionsQuery, { term })
        .then((data) => {
          setSuggestions(data.search.suggestions)
        })
        .finally(() => setLoading(false))
    }
  }, [term])

  const terms = (suggestions?.terms ?? []).slice(0, limit)
  const products = (suggestions?.products ?? []).slice(0, limit)

  return { terms, products, loading }
}

function Suggestions({ term = '', ...otherProps }: SuggestionsProps) {
  const { terms, products, loading } = useSuggestions(term)

  if (term.length === 0 && !loading) {
    return (
      <>
        <SearchHistory />
        <SuggestionsTopSearch />
      </>
    )
  }

  if (loading) {
    return <p data-fs-search-input-loading-text>Loading...</p>
  }

  if (terms.length === 0 && products.length === 0) {
    return null
  }

  return (
    <UISuggestions
      term={term}
      terms={terms}
      products={products}
      {...otherProps}
    />
  )
}

export default Suggestions
