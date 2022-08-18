import './src/styles/global/tokens.scss'
import './src/styles/global/resets.scss'
import './src/styles/global/typography.scss'
import './src/styles/global/layout.scss'

// Replace this with your theme style file
import './src/styles/themes/custom-theme.scss'

import Layout from 'src/Layout'
import AnalyticsHandler from 'src/sdk/analytics'
import ErrorBoundary from 'src/sdk/error/ErrorBoundary'
import TestProvider from 'src/sdk/tests'
import UIProvider from 'src/sdk/ui/Provider'
import type { GatsbyBrowser } from 'gatsby'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}) => {
  const handleUpdate = async () => {
    if ('serviceWorker' in navigator) {
      let refreshing: boolean

      const oldSw = (await navigator.serviceWorker.getRegistration())?.active
        ?.state

      navigator.serviceWorker.addEventListener('controllerchange', async () => {
        if (refreshing) return

        const newSw = (await navigator.serviceWorker.getRegistration())?.active
          ?.state

        if (oldSw === 'activated' && newSw === 'activating') {
          refreshing = true
          window.location.reload()
        }
      })
    }
  }

  handleUpdate()

  return (
    <ErrorBoundary>
      <AnalyticsHandler />
      <TestProvider>
        <UIProvider>{element}</UIProvider>
      </TestProvider>
    </ErrorBoundary>
  )
}

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <Layout>{element}</Layout>
}
