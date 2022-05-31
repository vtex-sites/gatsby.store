import { gql } from '@vtex/graphql-utils'
import UISuggestions from 'src/components/ui/Search/Suggestions'
import type {
  SearchSuggestionsQueryQuery as Query,
  SearchSuggestionsQueryQueryVariables as Variables,
} from '@generated/graphql'
import type { SuggestionsProps } from 'src/components/ui/Search/Suggestions'
import { useSession } from '@faststore/sdk'
import { useQuery } from 'src/sdk/graphql/useQuery'

import { SearchHistory } from '../History'
import SuggestionsTopSearch from './SuggestionsTopSearch'

const MAX_SUGGESTIONS = 5

const query = gql`
  query SearchSuggestionsQuery(
    $term: String!
    $selectedFacets: [IStoreSelectedFacet!]
  ) {
    search(first: 5, term: $term, selectedFacets: $selectedFacets) {
      suggestions {
        terms {
          value
        }
        products {
          ...ProductSummary_product
        }
      }
    }
  }
`

function useSuggestions(term: string, limit: number = MAX_SUGGESTIONS) {
  const { channel, locale } = useSession()

  const { data, error } = useQuery<Query, Variables>(query, {
    term,
    selectedFacets: [
      { key: 'channel', value: channel ?? '' },
      { key: 'locale', value: locale },
    ],
  })

  return {
    terms: (data?.search.suggestions.terms ?? []).slice(0, limit),
    products: (data?.search.suggestions.products ?? []).slice(0, limit),
    isLoading: !error && !data,
  }
}

function Suggestions({ term = '', ...otherProps }: SuggestionsProps) {
  const { terms, products, isLoading } = useSuggestions(term)

  if (term.length === 0 && !isLoading) {
    return (
      <>
        <SearchHistory />
        <SuggestionsTopSearch />
      </>
    )
  }

  if (isLoading) {
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
