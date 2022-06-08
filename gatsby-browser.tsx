import './src/styles/fonts.css'
import './src/styles/global/tokens.scss'
import './src/styles/global/resets.scss'
import './src/styles/global/typography.scss'
import './src/styles/global/layout.scss'

import { CartProvider, SessionProvider } from '@faststore/sdk'
import Layout from 'src/Layout'
import AnalyticsHandler from 'src/sdk/analytics'
import { validateCart } from 'src/sdk/cart/validate'
import ErrorBoundary from 'src/sdk/error/ErrorBoundary'
import { validateSession } from 'src/sdk/session/validate'
import TestProvider from 'src/sdk/tests'
import UIProvider from 'src/sdk/ui/Provider'
import type { GatsbyBrowser } from 'gatsby'

import storeConfig from './store.config'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => (
  <ErrorBoundary>
    <AnalyticsHandler />
    <TestProvider>
      <UIProvider>
        <SessionProvider
          initialState={{
            channel: storeConfig.channel,
            locale: storeConfig.locale,
          }}
          onValidateSession={validateSession}
        >
          <CartProvider mode="optimistic" onValidateCart={validateCart}>
            {element}
          </CartProvider>
        </SessionProvider>
      </UIProvider>
    </TestProvider>
  </ErrorBoundary>
)

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <Layout>{element}</Layout>
}
