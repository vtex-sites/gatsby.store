import { ITEMS_PER_SECTION } from 'src/constants'
import type { PropsWithChildren } from 'react'
import Section from 'src/components/sections/Section'

import ProductCardSkeleton from '../ProductCardSkeleton'

interface Props {
  loading?: boolean
  title?: string
}

function ProductShelfSkeleton({
  children,
  loading = true,
  title = '',
}: PropsWithChildren<Props>) {
  return loading ? (
    <Section className="layout__section">
      {title && (
        <h2 className="text__title-section layout__content">{title}</h2>
      )}
      <ul data-fs-product-shelf-items className="layout__content">
        {Array.from({ length: ITEMS_PER_SECTION }, (_, index) => (
          <li key={String(index)}>
            <ProductCardSkeleton sectioned />
          </li>
        ))}
      </ul>
    </Section>
  ) : (
    <>{children}</>
  )
}

export default ProductShelfSkeleton
