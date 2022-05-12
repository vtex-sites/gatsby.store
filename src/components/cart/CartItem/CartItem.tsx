import { Card, CardActions, CardContent, CardImage } from '@faststore/ui'
import Button from 'src/components/ui/Button'
import Icon from 'src/components/ui/Icon'
import { Image } from 'src/components/ui/Image'
import Price from 'src/components/ui/Price'
import QuantitySelector from 'src/components/ui/QuantitySelector'
import { useCart } from 'src/sdk/cart/useCart'
import { useRemoveButton } from 'src/sdk/cart/useRemoveButton'
import { useFormattedPrice } from 'src/sdk/product/useFormattedPrice'
import type { CartItem as ICartItem } from 'src/sdk/cart/validate'
import { useCallback } from 'react'
import type {
  AddToCartEvent,
  CurrencyCode,
  RemoveFromCartEvent,
} from '@faststore/sdk'
import { useSession, sendAnalyticsEvent } from '@faststore/sdk'
import type { AnalyticsItem } from 'src/sdk/analytics/types'

interface Props {
  item: ICartItem
}

function CartItem({ item }: Props) {
  const btnProps = useRemoveButton(item)
  const { updateItemQuantity } = useCart()
  const {
    currency: { code },
  } = useSession()

  const onQuantityChange = useCallback(
    (quantity: number) => {
      const quantityDelta = quantity - item.quantity

      sendAnalyticsEvent<
        AddToCartEvent<AnalyticsItem> | RemoveFromCartEvent<AnalyticsItem>
      >({
        name: quantityDelta > 0 ? 'add_to_cart' : 'remove_from_cart',
        params: {
          currency: code as CurrencyCode,
          // TODO: In the future, we can explore more robust ways of
          // calculating the value (gift items, discounts, etc.).
          value: item.price * Math.abs(quantityDelta),
          items: [
            {
              item_id: item.itemOffered.isVariantOf.productGroupID,
              item_name: item.itemOffered.isVariantOf.name,
              item_brand: item.itemOffered.brand.name,
              item_variant: item.itemOffered.sku,
              quantity: Math.abs(quantityDelta),
              price: item.price,
              discount: item.listPrice - item.price,
              currency: code as CurrencyCode,
              item_variant_name: item.itemOffered.name,
              product_reference_id: item.itemOffered.gtin,
            },
          ],
        },
      })

      updateItemQuantity(item.id, quantity)
    },
    [item, updateItemQuantity, code]
  )

  return (
    <Card
      className="cart-item"
      data-testid="cart-item"
      data-sku={item.itemOffered.sku}
      data-seller={item.seller.identifier}
    >
      <CardContent>
        <CardImage>
          <Image
            src={item.itemOffered.image[0].url}
            alt={item.itemOffered.image[0].alternateName}
            width={72}
            height={72}
          />
        </CardImage>
        <div data-cart-item-summary>
          <p className="text__body" data-cart-item-title>
            {item.itemOffered.isVariantOf.name}
          </p>
          <span data-cart-item-prices>
            <Price
              value={item.listPrice}
              formatter={useFormattedPrice}
              testId="list-price"
              data-value={item.listPrice}
              variant="listing"
              classes="text__legend"
              SRText="Original price:"
            />
            <Price
              value={item.price}
              formatter={useFormattedPrice}
              testId="price"
              data-value={item.price}
              variant="spot"
              classes="text__title-subsection"
              SRText="Price:"
            />
          </span>
        </div>
      </CardContent>

      <CardActions>
        <Button
          variant="tertiary"
          icon={<Icon name="XCircle" width={18} height={18} />}
          iconPosition="left"
          {...btnProps}
        >
          Remove
        </Button>
        <QuantitySelector
          min={1}
          initial={item.quantity}
          onChange={onQuantityChange}
        />
      </CardActions>
    </Card>
  )
}

export default CartItem
