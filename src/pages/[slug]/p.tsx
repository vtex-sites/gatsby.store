import { gql } from '@faststore/graphql-utils'
import { graphql } from 'gatsby'
import {
  BreadcrumbJsonLd,
  GatsbySeo,
  ProductJsonLd,
} from 'gatsby-plugin-next-seo'
import ProductDetails from 'src/components/sections/ProductDetails'
import ProductShelf from 'src/components/sections/ProductShelf'
import BannerNewsletter from 'src/components/sections/BannerNewsletter/BannerNewsletter'
import { ITEMS_PER_SECTION } from 'src/constants'
import { useSession } from 'src/sdk/session'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type {
  ProductPageQueryQuery,
  ServerProductPageQueryQuery,
  ProductPageQueryQueryVariables,
} from '@generated/graphql'

import 'src/styles/pages/pdp.scss'

export type Props = PageProps<
  ProductPageQueryQuery,
  ProductPageQueryQueryVariables,
  unknown,
  ServerProductPageQueryQuery | null
> & { slug: string }

function Page(props: Props) {
  const { locale, currency } = useSession()
  const {
    data: { site },
    serverData,
  } = props

  // No data was found
  if (serverData === null) {
    return null
  }

  const {
    product,
    product: { seo },
  } = serverData

  const title = seo.title ?? site?.siteMetadata?.title ?? ''
  const description = seo.description ?? site?.siteMetadata?.description ?? ''
  const canonical = `${site?.siteMetadata?.siteUrl}${seo.canonical}`

  return (
    <>
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={description}
        canonical={canonical}
        language={locale}
        openGraph={{
          type: 'og:product',
          url: canonical,
          title,
          description,
          images: product.image.map((img) => ({
            url: img.url,
            alt: img.alternateName,
          })),
        }}
        metaTags={[
          {
            property: 'product:price:amount',
            content: product.offers.lowPrice?.toString() ?? undefined,
          },
          {
            property: 'product:price:currency',
            content: currency.code,
          },
        ]}
      />
      <BreadcrumbJsonLd
        itemListElements={product.breadcrumbList.itemListElement ?? []}
      />
      <ProductJsonLd
        name={product.name}
        description={product.description}
        brand={product.brand.name}
        sku={product.sku}
        gtin={product.gtin}
        images={product.image.map((img) => img.url)} // Somehow, Google does not understand this valid Schema.org schema, so we need to do conversions
        offersType="AggregateOffer"
        offers={{
          ...product.offers,
          price: product.offers.offers[0].price.toString(),
        }}
      />

      {/*
        WARNING: Do not import or render components from any
        other folder than '../components/sections' in here.

        This is necessary to keep the integration with the CMS
        easy and consistent, enabling the change and reorder
        of elements on this page.

        If needed, wrap your component in a <Section /> component
        (not the HTML tag) before rendering it here.
      */}
      <ProductDetails product={product} />

      <ProductShelf
        first={ITEMS_PER_SECTION}
        selectedFacets={[
          { key: 'buy', value: product.isVariantOf.productGroupID },
        ]}
        title="People also bought"
        withDivisor
      />

      <ProductShelf
        first={ITEMS_PER_SECTION}
        selectedFacets={[
          { key: 'view', value: product.isVariantOf.productGroupID },
        ]}
        title="People also view"
      />

      <BannerNewsletter />
    </>
  )
}

export const querySSG = graphql`
  query ProductPageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
        siteUrl
      }
    }
  }
`

export const querySSR = gql`
  query ServerProductPageQuery($slug: String!) {
    product(locator: [{ key: "slug", value: $slug }]) {
      id: productID

      seo {
        title
        description
        canonical
      }

      brand {
        name
      }

      sku
      gtin
      name
      description

      breadcrumbList {
        itemListElement {
          item
          name
          position
        }
      }

      image {
        url
        alternateName
      }

      offers {
        lowPrice
        highPrice
        priceCurrency
        offers {
          availability
          price
          priceValidUntil
          priceCurrency
          itemCondition
          seller {
            identifier
          }
        }
      }

      isVariantOf {
        productGroupID
      }

      ...ProductDetailsFragment_product
    }
  }
`

export const getServerData = async ({
  params: { slug },
}: {
  params: Record<string, string>
}) => {
  const ONE_YEAR_CACHE = `s-maxage=31536000, stale-while-revalidate`
  const { isNotFoundError } = await import('@faststore/api')
  const { execute } = await import('src/server/index')
  const { data, errors = [] } = await execute({
    operationName: querySSR,
    variables: { slug },
  })

  const notFound = errors.find(isNotFoundError)

  if (notFound) {
    const params = new URLSearchParams({
      from: encodeURIComponent(`/${slug}/p`),
    })

    return {
      status: 301,
      props: null,
      headers: {
        'cache-control': ONE_YEAR_CACHE,
        location: `/404/?${params.toString()}}`,
      },
    }
  }

  if (errors.length > 0) {
    throw errors[0]
  }

  return {
    status: 200,
    props: data,
    headers: {
      'cache-control': ONE_YEAR_CACHE,
    },
  }
}

Page.displayName = 'Page'

export default mark(Page)
