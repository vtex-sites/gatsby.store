import { gql } from '@vtex/graphql-utils'
import { useCallback, useEffect, useState } from 'react'
import UISuggestions from 'src/components/ui/Search/Suggestions'
import { request } from 'src/sdk/graphql/request'
import debounce from 'debounce'
import type {
  SearchSuggestionsQueryQuery,
  SearchSuggestionsQueryQueryVariables,
} from '@generated/graphql'
import type { SuggestionsProps } from 'src/components/ui/Search/Suggestions'
import { useSession } from '@faststore/sdk'

import { SearchHistory } from '../History'
import SuggestionsTopSearch from './SuggestionsTopSearch'

const MAX_SUGGESTIONS = 5

const SearchSuggestionsQuery = gql`
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
  const [suggestions, setSuggestions] =
    useState<SearchSuggestionsQueryQuery['search']['suggestions']>()

  const [loading, setLoading] = useState<boolean>(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedRequest = useCallback(
    debounce(
      async (
        query: string,
        sessionChannel: string | null,
        sessionLocale: string
      ) => {
        const data = await request<
          SearchSuggestionsQueryQuery,
          SearchSuggestionsQueryQueryVariables
        >(SearchSuggestionsQuery, {
          term: query,
          selectedFacets: [
            { key: 'channel', value: sessionChannel ?? '' },
            { key: 'locale', value: sessionLocale },
          ],
        })

        setSuggestions(data.search.suggestions)
      },
      1000
    ),
    []
  )

  useEffect(() => {
    if (term.length < 0) {
      return
    }

    setLoading(true)
    debouncedRequest(term, channel, locale)
    setLoading(false)
  }, [debouncedRequest, term, channel, locale])

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
