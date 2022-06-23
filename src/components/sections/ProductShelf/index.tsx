import { lazy, Suspense } from 'react'
import ProductShelfSkeleton from 'src/components/skeletons/ProductShelfSkeleton'
import type { ProductShelfProps } from 'src/components/sections/ProductShelf/ProductShelf'

const ProductShelfComponent = lazy(
  () => import('src/components/sections/ProductShelf/ProductShelf')
)

export default function ProductShelf(props: ProductShelfProps) {
  return (
    <Suspense fallback={<ProductShelfSkeleton title={props.title} loading />}>
      <ProductShelfComponent {...props} />
    </Suspense>
  )
}
