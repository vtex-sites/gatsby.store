import { formatSearchState, initSearchState } from '@faststore/sdk'
import { createContext, useContext } from 'react'

export const formatSearchPath = (term: string) => {
  const { pathname, search } = formatSearchState(
    initSearchState({
      term,
      base: '/s',
    })
  )

  return `${pathname}${search}`
}

interface SearchInputContextValue {
  onSearchInputSelection?: (term: string) => void
}

export const SearchInputContext = createContext<SearchInputContextValue | null>(
  null
)

const useSearchInput = () => {
  const context = useContext(SearchInputContext)

  if (context === null) {
    throw new Error('Do not use outside the SearchInputContext context.')
  }

  return context
}

export default useSearchInput
