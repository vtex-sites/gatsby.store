module.exports = {
  // Theming
  theme: 'midnight',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: 'storeframework',
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
  },

  // Default channel
  session: {
    currency: {
      code: 'USD',
      symbol: '$',
    },
    locale: 'en-US',
    channel: '{"salesChannel":"1","regionId":""}',
    country: 'USA',
    postalCode: null,
    person: null,
  },

  // Production URLs
  storeUrl: 'https://gatsby.vtex.app',
  secureSubdomain: 'https://secure.vtexfaststore.com',
  checkoutUrl: 'https://secure.vtexfaststore.com/checkout',
  loginUrl: 'https://secure.vtexfaststore.com/api/io/login',
  accountUrl: 'https://secure.vtexfaststore.com/api/io/account',

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:9000',
    pages: {
      home: '/',
      pdp: '/apple-magic-mouse/p',
      collection: '/office',
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: '/apple-magic-mouse/p',
      collection: '/office',
      collection_filtered:
        '/office/?category-1=office&marca=acer&facets=category-1%2Cmarca',
      search: '/s?q=orange',
    },
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: 'GTM-PGHZ95N',
  },

  experimental: {
    nodeVersion: 18,
  },
}
