import { memo } from 'react'
import type { ReactNode } from 'react'

import styles from './product-title.module.scss'

interface ProductTitleProp {
  /**
   * A react component to be used as the product title, e.g. a `h1`
   */
  title: ReactNode
  /**
   * A react component to be used as the product label, e.g. a `DiscountBadge`
   */
  label?: ReactNode
  /**
   * A text to be used below the title and the label, such as the product's reference number.
   */
  refNumber?: string
}

function ProductTitle({ title, label, refNumber }: ProductTitleProp) {
  return (
    <div className={styles.fsProductTitle}>
      <div data-fs-product-title-header>
        {title}
        {!!label && label}
      </div>

      {refNumber && (
        <div data-fs-product-title-ref-number className="text__legend">
          Ref.: {refNumber}
        </div>
      )}
    </div>
  )
}

export default memo(ProductTitle)
