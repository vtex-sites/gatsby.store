import 'src/styles/pages/homepage.scss'

import { useSession } from '@faststore/sdk'
import { graphql } from 'gatsby'
import { GatsbySeo, JsonLd } from 'gatsby-plugin-next-seo'
import { mark } from 'src/sdk/tests/mark'
import type { PageProps } from 'gatsby'
import type { CmsHomePageQueryQuery } from '@generated/graphql'
import RenderPageSections from 'src/components/cms/RenderPageSections'
import { clientCMS } from 'src/cms/client'
import type { ContentData } from '@vtex/client-cms'
import cmsHomeFallback from 'src/cms/cmsHomeFallback'

export type Props = PageProps<
  CmsHomePageQueryQuery,
  unknown,
  unknown,
  ContentData
>

function Page(props: Props) {
  const {
    data: { site },
    location: { pathname, host },
    serverData: cmsHome,
  } = props

  const { locale } = useSession()

  const title = site?.siteMetadata?.title ?? ''
  const siteUrl = `https://${host}${pathname}`

  return (
    <>
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

      {/*
        WARNING: Do not import or render components from any
        other folder than '../components/sections' in here.

        This is necessary to keep the integration with the CMS
        easy and consistent, enabling the change and reorder
        of elements on this page.

        If needed, wrap your component in a <Section /> component
        (not the HTML tag) before rendering it here.
      */}
      <RenderPageSections sections={cmsHome.sections} />
    </>
  )
}

export const querySSG = graphql`
  query CmsHomePageQuery {
    site {
      siteMetadata {
        title
        description
        titleTemplate
      }
    }
  }
`

export async function getServerData() {
  try {
    const cmsHome = await clientCMS.getCMSPage({
      contentType: 'home',
      documentId: 'ad2fd81d-a53c-4281-8d01-a4fc2f274db3',
      versionId: '1b18fbcf-ce08-4ead-9011-364921e725c3',
    })

    return {
      props: cmsHome,
    }
  } catch (error) {
    console.error('CMS fetch error', error)

    return {
      props: cmsHomeFallback,
    }
  }
}

Page.displayName = 'Page'
export default mark(Page)
