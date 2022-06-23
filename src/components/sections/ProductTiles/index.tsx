import { lazy, Suspense } from 'react'
import ProductTilesSkeleton from 'src/components/skeletons/ProductTilesSkeleton'
import type { TilesProps } from 'src/components/sections/ProductTiles/ProductTiles'

const ProductTilesComponent = lazy(
  () => import('src/components/sections/ProductTiles/ProductTiles')
)

export default function ProductTiles(props: TilesProps) {
  return (
    <Suspense fallback={<ProductTilesSkeleton title={props.title} loading />}>
      <ProductTilesComponent {...props} />
    </Suspense>
  )
}
