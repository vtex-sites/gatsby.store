import Icon from 'src/components/ui/Icon'

import Button from '../Button'
import type { ButtonProps } from '../Button'

type Props = ButtonProps

function ButtonBuy({ children, ...otherProps }: Props) {
  return (
    <Button
      data-fs-button
      data-fs-button-buy
      data-fs-button-variant="buy"
      {...otherProps}
    >
      <Icon name="ShoppingCart" width={18} height={18} weight="bold" />
      {children}
    </Button>
  )
}

export default ButtonBuy
