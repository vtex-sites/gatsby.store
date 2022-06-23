import type { PropsWithChildren } from 'react'
import Section from 'src/components/sections/Section'
import Tiles, { Tile } from 'src/components/ui/Tiles'

import ProductTileSkeleton from './ProductTileSkeleton'

// TODO: // Replace it when items number become dynamically defined
const DEFAULT_ITEMS_NUMBER = 3

interface Props {
  loading?: boolean
  title: string | JSX.Element
  variant?: 'wide' | 'default'
}

function ProductTilesSkeleton({
  children,
  loading = true,
  title,
  variant = 'default',
}: PropsWithChildren<Props>) {
  return loading ? (
    <Section className="layout__section layout__content">
      <h2 className="text__title-section">{title}</h2>
      <div>
        <Tiles>
          {Array.from({ length: DEFAULT_ITEMS_NUMBER }, (_, index) => (
            <Tile key={String(index)}>
              <ProductTileSkeleton tileIndex={index + 1} variant={variant} />
            </Tile>
          ))}
        </Tiles>
      </div>
    </Section>
  ) : (
    <>{children}</>
  )
}

export default ProductTilesSkeleton
