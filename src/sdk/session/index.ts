import { gql } from '@faststore/graphql-utils'
import { createSessionStore } from '@faststore/sdk'
import { useMemo } from 'react'
import type { Session } from '@faststore/sdk'

import storeConfig from '../../../store.config'
import { request } from '../graphql/request'
import { createValidationStore, useStore } from '../useStore'
import type {
  ValidateSessionMutation,
  ValidateSessionMutationVariables,
} from '../../../@generated/graphql/index'

export const mutation = gql`
  mutation ValidateSession($session: IStoreSession!, $search: String!) {
    validateSession(session: $session, search: $search) {
      locale
      channel
      country
      postalCodes
      currency {
        code
        symbol
      }
      person {
        id
        email
        givenName
        familyName
      }
    }
  }
`

export const validateSession = async (session: Session) => {
  const data = await request<
    ValidateSessionMutation,
    ValidateSessionMutationVariables
  >(mutation, { session, search: window.location.search })

  return data.validateSession
}

const [validationStore, onValidate] = createValidationStore(validateSession)

export const sessionStore = createSessionStore(
  {
    currency: {
      code: 'USD',
      symbol: '$',
    },
    locale: storeConfig.locale,
    channel: storeConfig.channel,
    country: 'USA',
    postalCode: null,
    person: null,
  },
  onValidate
)

export const useSession = () => {
  const session = useStore(sessionStore)
  const isValidating = useStore(validationStore)

  return useMemo(
    () => ({
      ...session,
      isValidating,
    }),
    [isValidating, session]
  )
}
