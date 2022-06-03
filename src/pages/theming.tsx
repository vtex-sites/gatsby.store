import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import BannerText from 'src/components/sections/BannerText'
import Hero from 'src/components/sections/Hero'
import IncentivesHeader from 'src/components/sections/Incentives/IncentivesHeader'
import ProductShelf from 'src/components/sections/ProductShelf'
import ProductTiles from 'src/components/sections/ProductTiles'
import { mark } from 'src/sdk/tests/mark'
import { ITEMS_PER_SECTION } from 'src/constants'
import type { PageProps } from 'gatsby'
import type { HomePageQueryQuery } from '@generated/graphql'
import IncentivesMock from 'src/components/sections/Incentives/incentivesMock'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import { Suspense } from 'react'
import ProductTilesSkeleton from 'src/components/skeletons/ProductTilesSkeleton'

import InputText from '../components/ui/InputText'
import Button from '../components/ui/Button'
import Checkbox from '../components/ui/Checkbox'

import 'src/styles/pages/homepage.scss'
import 'src/styles/pages/theming.scss'
import 'src/styles/global/new-theme.scss'

export type Props = PageProps<HomePageQueryQuery>

function Page(props: Props) {
  const {
    data: { site },
    location: { pathname, host },
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `https://${host}${pathname}`

  return (
    <div className="new-theme content">
      {/* SEO */}
      <GatsbySeo
        title={title}
        description={site?.siteMetadata?.description ?? ''}
        titleTemplate={site?.siteMetadata?.titleTemplate ?? ''}
        language={locale}
        canonical={siteUrl}
        openGraph={{
          type: 'website',
          url: siteUrl,
          title: title ?? '',
          description: site?.siteMetadata?.description ?? '',
        }}
      />
      <JsonLd
        json={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          url: siteUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/s/?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <Hero
        title="New Products Available"
        subtitle="At BaseStore you can shop the best tech of 2022. Enjoy and get 10% off on your first purchase."
        linkText="See all"
        link="/"
        imageSrc="https://storeframework.vtexassets.com/arquivos/ids/190897/Photo.jpg"
        imageAlt="Quest 2 Controller on a table"
        colorVariant="light"
      />

      <IncentivesHeader incentives={IncentivesMock} />

      <Suspense fallback={<ProductShelfSkeleton loading />}>
        <ProductShelf
          first={ITEMS_PER_SECTION}
          selectedFacets={[{ key: 'productClusterIds', value: '140' }]}
          title="Most Wanted"
          suspenseData
        />
      </Suspense>

      <Suspense fallback={<ProductTilesSkeleton loading />}>
        <ProductTiles
          first={3}
          selectedFacets={[{ key: 'productClusterIds', value: '141' }]}
          title="Just Arrived"
        />
      </Suspense>

      <BannerText
        title="Receive our news and promotions in advance. Enjoy and get 10% off on your first purchase."
        actionPath="/"
        actionLabel="Call to action"
      />

      <Suspense fallback={<ProductShelfSkeleton loading />}>
        <ProductShelf
          first={ITEMS_PER_SECTION}
          selectedFacets={[{ key: 'productClusterIds', value: '142' }]}
          title="Deals & Promotions"
          suspenseData
        />
      </Suspense>

      <section className="form section layout__section">
        <div className="form__wrapper">
          <div className="layout__content">
            <article>
              <h2>Get News and Special Offers!</h2>
              <p>
                Receive our news and promotions in advance. Enjoy and get 10%
                off your first purchase. For more information click here.
              </p>
            </article>
            <form>
              <InputText
                id="default-input-text"
                label="Name"
                errorMessage="Please add a valid email"
              />
              <InputText
                id="default-input-phone"
                label="Phone"
                type="number"
                errorMessage="Please add a valid number"
              />
              <InputText
                id="default-input-email"
                label="Email"
                type="email"
                errorMessage="Please add a valid email"
              />
              <div className="checkbox__wrapper">
                <Checkbox id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Button variant="primary">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export const querySSG = graphql`
  query ThemingQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
  }
`

Page.displayName = 'Page'
export default mark(Page)
