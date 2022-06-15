import { PriceRange as UIPriceRange } from '@faststore/ui'
import { usePriceFormatter } from 'src/sdk/product/useFormattedPrice'
import type { PriceRangeProps } from '@faststore/ui'

import styles from './price-range.module.scss'

type Props = Omit<PriceRangeProps, 'formatter'>

function PriceRange(props: Props) {
  const formatter = usePriceFormatter()

  return (
    <UIPriceRange
      className={styles.fsPriceRange}
      formatter={formatter}
      {...props}
    />
  )
}

export default PriceRange
