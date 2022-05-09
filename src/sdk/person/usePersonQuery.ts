import { useEffect, useState } from 'react'
import { gql } from '@vtex/graphql-utils'
import type {
  PersonQueryQuery,
  PersonQueryQueryVariables,
} from '@generated/graphql'
import { useSession } from '@faststore/sdk'

import type { QueryOptions } from '../graphql/useQuery'
import { request } from '../graphql/request'

export const query = gql`
  query PersonQuery {
    person {
      id
      email
      givenName
      familyName
    }
  }
`

const usePersonQuery = (options?: QueryOptions) => {
  const [data, setData] = useState<PersonQueryQuery | null>(null)

  useEffect(() => {
    let cancel = false
    const effect = async () => {
      const reqData = await request<
        PersonQueryQuery,
        PersonQueryQueryVariables
      >(
        query,
        {},
        {
          ...options,
          fetchOptions: { ...options?.fetchOptions, method: 'POST' },
        }
      ).catch(() => undefined)

      // If request fails (4xx or 5xx status code), try to refetch after 1s.
      if (!reqData) {
        setTimeout(effect, 1000)

        return
      }

      if (cancel) {
        return
      }

      setData(reqData)
    }

    setTimeout(effect, 0)

    return () => {
      cancel = true
    }
  }, [options])
  const { setSession, user, ...session } = useSession()
  const person = data?.person

  useEffect(() => {
    if (!!person && person !== user) {
      setSession({
        ...session,
        user: person,
      })
    }
  }, [person, user, session, setSession])

  return person
}

export default usePersonQuery
