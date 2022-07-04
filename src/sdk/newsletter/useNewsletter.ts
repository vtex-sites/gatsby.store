import { useCallback, useState } from 'react'
import { gql } from '@faststore/graphql-utils'

import type {
  AddToNewsletterMutation,
  AddToNewsletterMutationVariables,
} from '../../../@generated/graphql/index'
import { request } from '../graphql/request'

type MasterDataResponse = {
  id: string
}

export const mutation = gql`
  mutation AddToNewsletter($data: IPersonNewsletter!) {
    addToNewsletter(data: $data) {
      id
    }
  }
`
const addToNewsletter = async (data: { name: string; email: string }) => {
  const response = await request<
    AddToNewsletterMutation,
    AddToNewsletterMutationVariables
  >(mutation, { data })

  return response.addToNewsletter
}

export const useNewsletter = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<MasterDataResponse | null>(null)
  const [error, setError] = useState(false)

  const addUser = useCallback(
    (user: { name: string; email: string }) => {
      setError(false)
      setData(null)
      setLoading(true)

      return addToNewsletter(user)
        .then((response) => {
          setData(response as MasterDataResponse)
        })
        .catch(() => {
          setError(true)
        })
        .finally(() => {
          setLoading(false)
        })
    },
    [setError, setData, setLoading]
  )

  const reset = useCallback(() => {
    setData(null)
    setError(false)
    setLoading(false)
  }, [])

  return {
    error,
    addUser,
    loading,
    data,
    reset,
  }
}
