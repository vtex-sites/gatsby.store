import { isFastStoreError, stringifyCacheControl } from '@faststore/api'
import type { GatsbyFunctionRequest, GatsbyFunctionResponse } from 'gatsby'

import { execute } from '../server'

// Example: "Set-Cookie: key=value; domain=example.com; path=/"
const MATCH_DOMAIN_REGEXP = /;\s*domain=[^;]*/gi

/**
 * The Checkout API scopes its cookies to the store domain, which the browser
 * rejects on localhost. Outside production, drop the Domain attribute so the
 * cookie becomes host-only and works while developing.
 */
const normalizeSetCookie = (setCookie: string) =>
  process.env.NODE_ENV !== 'production'
    ? setCookie.replace(MATCH_DOMAIN_REGEXP, '')
    : setCookie

const parseRequest = (req: GatsbyFunctionRequest) => {
  const { operationName, variables, query } =
    req.method === 'POST'
      ? req.body
      : {
          operationName: req.query.operationName,
          variables: JSON.parse(req.query.variables),
          query: undefined,
        }

  return {
    operationName,
    variables,
    // Do not allow queries in production, only for devMode so we can use graphql tools
    // like introspection etc. In production, we only accept known queries for better
    // security
    query: process.env.NODE_ENV !== 'production' ? query : undefined,
  }
}

const handler = async (
  req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse
) => {
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.status(405)

    return
  }

  const { operationName, variables, query } = parseRequest(req)

  try {
    const { data, errors, extensions } = await execute(
      {
        operationName,
        variables,
        query,
      },
      { req }
    )

    const hasErrors = Array.isArray(errors)

    if (hasErrors) {
      const error = errors.find(isFastStoreError)

      res.status(error?.extensions.status ?? 500)
    }

    // Forward Checkout cookies even when there are errors: Checkout may have
    // already linked shopper data to them (Ownership Cookie).
    const setCookies = Array.from(extensions.cookies?.values() ?? []).map(
      ({ setCookie }) => normalizeSetCookie(setCookie)
    )

    if (setCookies.length > 0) {
      res.setHeader('set-cookie', setCookies)
    }

    // A response that sets shopper cookies must never be cached
    const cacheControl =
      !hasErrors && setCookies.length === 0 && extensions.cacheControl
        ? stringifyCacheControl(extensions.cacheControl)
        : 'no-cache, no-store'

    res.setHeader('cache-control', cacheControl)
    res.setHeader('content-type', 'application/json')
    res.send(JSON.stringify({ data, errors }))
  } catch (err) {
    console.error(err)

    res.status(500)
  }
}

export default handler
