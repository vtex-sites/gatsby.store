import { gql } from '@faststore/graphql-utils'
import {
  formatSearchState,
  parseSearchState,
  SearchProvider,
} from '@faststore/sdk'
import { graphql } from 'gatsby'
import { BreadcrumbJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo'
import { useMemo } from 'react'
import Breadcrumb from 'src/components/sections/Breadcrumb'
import Hero from 'src/components/sections/Hero'
import ProductGallery from 'src/components/sections/ProductGallery'
import ProductShelf from 'src/components/sections/ProductShelf'
import ScrollToTopButton from 'src/components/sections/ScrollToTopButton'
import Icon from 'src/components/ui/Icon'
import { ITEMS_PER_PAGE, ITEMS_PER_SECTION } from 'src/constants'
import { applySearchState } from 'src/sdk/search/state'
import { useSession } from 'src/sdk/session'
import { mark } from 'src/sdk/tests/mark'
import type {
  CollectionPageQueryQuery,
  ServerCollectionPageQueryQuery,
  CollectionPageQueryQueryVariables,
} from '@generated/graphql'
import type { PageProps } from 'gatsby'
import type { SearchState } from '@faststore/sdk'

import 'src/styles/pages/plp.scss'

type Props = PageProps<
  CollectionPageQueryQuery,
  CollectionPageQueryQueryVariables,
  unknown,
  ServerCollectionPageQueryQuery | null
> & { slug: string }

const useSearchParams = (props: Props): SearchState => {
  const {
    location: { href, pathname },
    serverData,
  } = props

  const selectedFacets = serverData?.collection?.meta.selectedFacets

  const hrefState = useMemo(() => {
    const newState = parseSearchState(
      new URL(href ?? pathname, 'http://localhost')
    )

    // In case we are in an incomplete url
    if (newState.selectedFacets.length === 0) {
      newState.selectedFacets = selectedFacets ?? []
    }

    return formatSearchState(newState).href
  }, [href, pathname, selectedFacets])

  return useMemo(() => parseSearchState(new URL(hrefState)), [hrefState])
}

function Page(props: Props) {
  const {
    data: { site },
    serverData,
    slug,
  } = props

  const { locale } = useSession()
  const searchParams = useSearchParams(props)

  // No data was found
  if (serverData === null) {
    return null
  }

  const { collection } = serverData
  const { page } = searchParams
  const title = collection?.seo.title ?? site?.siteMetadata?.title ?? ''
  const pageQuery = page !== 0 ? `?page=${page}` : ''
  const canonical = `${site?.siteMetadata?.siteUrl}/${slug}${pageQuery}`

  return (
    <SearchProvider
      onChange={applySearchState}
      itemsPerPage={ITEMS_PER_PAGE}
      {...searchParams}
    >
      {/* SEO */}
      <GatsbySeo
        title={title}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        description={site?.siteMetadata?.description ?? ''}
        canonical={canonical}
        language={locale}
        openGraph={{
          type: 'website',
          title,
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={collection?.breadcrumbList.itemListElement ?? []}
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
      <Breadcrumb
        breadcrumbList={collection?.breadcrumbList.itemListElement}
        name={title}
      />

      <Hero
        variant="secondary"
        title={title}
        subtitle={`All the amazing ${title} from the brands we partner with.`}
        imageSrc="https://storeframework.vtexassets.com/arquivos/ids/190897/Photo.jpg"
        imageAlt="Quest 2 Controller on a table"
        icon={<Icon name="Headphones" width={48} height={48} weight="thin" />}
      />

      <ProductGallery title={title} />

      <ProductShelf
        first={ITEMS_PER_SECTION}
        sort="score_desc"
        title="You might also like"
        withDivisor
      />

      <ScrollToTopButton />
    </SearchProvider>
  )
}

export const querySSG = graphql`
  query CollectionPageQuery {
    site {
      siteMetadata {
        titleTemplate
        title
        description
        siteUrl
      }
    }
  }
`

export const querySSR = gql`
  query ServerCollectionPageQuery($slug: String!) {
    collection(slug: $slug) {
      seo {
        title
        description
      }
      breadcrumbList {
        itemListElement {
          item
          name
          position
        }
      }
      meta {
        selectedFacets {
          key
          value
        }
      }
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
      from: encodeURIComponent(`/${slug}`),
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
