import { SessionProvider } from '@faststore/sdk'
import { LocationProvider } from '@reach/router'

import Suggestions from '.'
import type { SuggestionsProps } from '.'

const product = ({ id = '1', name = 'Handmade Steel Towels Practical' }) => ({
  id,
  slug: 'handmade-steel-towels-practical-15503951',
  sku: '15503951',
  brand: { brandName: 'Brand', name: 'Brand' },
  name: 'red',
  gtin: '5595633577807',
  isVariantOf: {
    productGroupID: '130742',
    name,
  },
  image: [
    {
      url: 'http://storeframework.vtexassets.com/arquivos/ids/190191/numquam.jpg?v=637755599170100000',
      alternateName: 'est',
    },
  ],
  offers: {
    lowPrice: 181.71,
    offers: [
      {
        availability: 'https://schema.org/InStock',
        price: 181.71,
        listPrice: 208.72,
        quantity: 1,
        seller: { identifier: '1' },
      },
    ],
  },
})

export default {
  component: Suggestions,
  title: 'Organisms/Search/Suggestions',
}

const Template = (props: SuggestionsProps) => (
  <LocationProvider>
    <SessionProvider>
      <Suggestions {...props} />
    </SessionProvider>
  </LocationProvider>
)

export const Default = Template.bind({})

Default.args = {
  term: 'Ste',
  terms: ['Steel', 'Stellar'],
  products: [
    product({ id: '1', name: 'Handmade Steel Towels Practical' }),
    product({ id: '2', name: 'Steel Towels' }),
    product({ id: '3', name: 'Steel Practical' }),
  ],
}
