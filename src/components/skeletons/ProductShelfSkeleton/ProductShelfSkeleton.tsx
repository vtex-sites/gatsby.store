import { ITEMS_PER_SECTION } from 'src/constants'
import type { PropsWithChildren } from 'react'
import Section from 'src/components/sections/Section'

import ProductCardSkeleton from '../ProductCardSkeleton'

interface Props {
  title: string | JSX.Element
  loading?: boolean
}

function ProductShelfSkeleton({
  children,
  title,
  loading = true,
}: PropsWithChildren<Props>) {
  return loading ? (
    <Section className="layout__section">
      <h2 className="text__title-section layout__content">{title}</h2>
      <div data-fs-product-shelf>
        <ul data-fs-product-shelf-items className="layout__content">
          {Array.from({ length: ITEMS_PER_SECTION }, (_, index) => (
            <li key={String(index)}>
              <ProductCardSkeleton sectioned />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  ) : (
    <>{children}</>
  )
}

export default ProductShelfSkeleton
