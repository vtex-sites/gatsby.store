import * as Sentry from '@sentry/gatsby'
import config from './store.config'

Sentry.init({
  dsn: 'https://64257cdef5c74ca884d3f69099633719@o191317.ingest.sentry.io/5515975',
  environment: process.env.NODE_ENV,
  debug: process.env.NODE_ENV === 'development',
  beforeSend(event) {
    event.extra = {
      account: config.api.storeId,
      ...event.extra,
    }
    return event
  },
})
