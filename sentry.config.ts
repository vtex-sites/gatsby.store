import * as Sentry from '@sentry/gatsby';

Sentry.init({
  dsn: 'https://64257cdef5c74ca884d3f69099633719@o191317.ingest.sentry.io/5515975',
  environment: process.env.NODE_ENV,
  debug: window.origin.includes('localhost'),
  denyUrls: [/localhost/g],
//  sampleRate: 1,
});
