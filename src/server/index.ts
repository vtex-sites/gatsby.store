/* eslint-disable react-hooks/rules-of-hooks */
import {
  envelop,
  useExtendContext,
  useMaskedErrors,
  useSchema,
} from '@envelop/core'
import { useParserCache } from '@envelop/parser-cache'
import { useValidationCache } from '@envelop/validation-cache'
import {
  getContextFactory,
  getSchema,
  isFastStoreError,
  getTypeDefs,
} from '@faststore/api'
import { GraphQLError } from 'graphql'
import { makeExecutableSchema, mergeSchemas } from '@graphql-tools/schema'
import { mergeTypeDefs } from '@graphql-tools/merge'
import type { FormatErrorHandler } from '@envelop/core'
import type { Options as APIOptions } from '@faststore/api'

import persisted from '../../@generated/graphql/persisted.json'
import storeConfig from '../../store.config'

interface ExecuteOptions {
  operationName: string
  variables: Record<string, unknown>
  query?: string | null
}

const persistedQueries = new Map(Object.entries(persisted))

const apiOptions: APIOptions = {
  platform: storeConfig.platform as APIOptions['platform'],
  account: storeConfig.api.storeId,
  environment: storeConfig.api.environment as APIOptions['environment'],
  channel: storeConfig.channel,
  hideUnavailableItems: storeConfig.api.hideUnavailableItems,
  locale: storeConfig.locale,
  flags: {
    enableOrderFormSync: true,
  },
}

// Setup type extensions
const typeDefs = `
  extend type StoreAggregateRating {
    ratingValue: Float
    reviewCount: Int
  }

  extend type StoreProduct {
    unitMultiplier: Float
    measurementUnit: String
  }
`

// Setup custom resolvers
const resolvers = {
  StoreAggregateRating: {
    ratingValue: () => 4.7,
    reviewCount: () => 4,
  },
  StoreProduct: {
    unitMultiplier: (root: any) => root?.unitMultiplier,
    measurementUnit: (root: any) => root?.measurementUnit,
  },
}

export const faststoreApiSchema = getSchema(apiOptions)

// Merge custom TypeDefs with the ones from @faststore/api
const mergedTypeDefs = mergeTypeDefs([getTypeDefs(), typeDefs])

const getMergedSchemas = async () =>
  mergeSchemas({
    schemas: [
      await faststoreApiSchema,
      makeExecutableSchema({
        resolvers,
        typeDefs: mergedTypeDefs,
      }),
    ],
    resolvers,
  })

// Merge schemas into a final schema
export const extendedSchema = getMergedSchemas()

const apiContextFactory = getContextFactory(apiOptions)

const formatError: FormatErrorHandler = (err) => {
  if (err instanceof GraphQLError && isFastStoreError(err.originalError)) {
    return err
  }

  console.error(err)

  return new GraphQLError('Sorry, something went wrong.')
}

const getEnvelop = async () =>
  envelop({
    plugins: [
      // useAsyncSchema(faststoreApiSchema),
      useSchema(await getMergedSchemas()),
      useExtendContext(apiContextFactory),
      useMaskedErrors({ formatError }),

      useValidationCache(),
      useParserCache(),
    ],
  })

const envelopPromise = getEnvelop()

export const execute = async (
  options: ExecuteOptions,
  envelopContext = { req: { headers: {} } }
) => {
  const { operationName, variables, query: maybeQuery } = options
  const query = maybeQuery ?? persistedQueries.get(operationName)

  const {
    req: { headers },
  } = envelopContext

  if (query == null) {
    throw new Error(`No query found for operationName: ${operationName}`)
  }

  const enveloped = await envelopPromise

  const {
    parse,
    contextFactory,
    execute: run,
    schema,
  } = enveloped(envelopContext)

  return run({
    schema,
    document: parse(query),
    variableValues: variables,
    contextValue: await contextFactory({ headers }),
    operationName,
  })
}
